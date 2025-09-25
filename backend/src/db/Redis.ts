// src/config/redis.ts
import Redis from "ioredis";

let redis: Redis | null = null;

if (process.env.USE_REDIS === "true") {
  const url = process.env.REDIS_URL || "redis://127.0.0.1:6379";
  redis = new Redis(url, {
    lazyConnect: true,
    enableOfflineQueue: false,
  });

  redis.on("connect", () => console.log("✅ Redis conectado"));
  redis.on("error", (err) => console.error("❌ Redis error:", err.message));
} else {
  console.log("↪️ Redis desactivado (USE_REDIS=false)");
}

export { redis };
