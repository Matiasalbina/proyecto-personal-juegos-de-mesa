import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import { createUser, getUserByEmail, User } from "../models/userModel";

const SALT_ROUNDS = 10;

export const registerUser: RequestHandler = async (req, res): Promise<void> => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      res.status(400).json({ message: "El correo ya está registrado." });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    console.log("🔧 Creando usuario con:", name, email);
    const newUser = await createUser(name, email, hashedPassword);
    console.log("✅ Usuario creado:", newUser);
    res
      .status(201)
      .json({ message: "Usuario registrado con éxito.", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar usuario.", error });
  }
};

export const loginUser: RequestHandler = async (req, res): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);
    if (!user) {
      res.status(401).json({ message: "Credenciales inválidas." });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ message: "Credenciales inválidas." });
      return;
    }

    // Opcional: generar token si usas JWT
    // const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    res.status(200).json({
      message: "Inicio de sesión exitoso.",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      // token,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al iniciar sesión.", error });
  }
};
