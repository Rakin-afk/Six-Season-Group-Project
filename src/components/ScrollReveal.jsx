import { motion } from "framer-motion";

export default function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      // শুরুতে কনটেন্টটি ৫০ পিক্সেল নিচে থাকবে এবং অদৃশ্য (opacity 0) থাকবে
      initial={{ opacity: 0, y: 50 }}
      
      // স্ক্রোল করে যখনই স্ক্রিনে আসবে, তখন এটি নিজের আসল জায়গায় ফিরে আসবে এবং দৃশ্যমান হবে
      whileInView={{ opacity: 1, y: 0 }}
      
      // viewport-এর once: true মানে অ্যানিমেশনটি পেজ লোড হওয়ার পর শুধু একবারই হবে
      // margin: "-100px" দেওয়ার কারণে স্ক্রোলের একদম মুখে না এসে একটু ভেতরে ঢুকলে অ্যানিমেশন স্টার্ট হবে (দেখতে প্রিমিয়াম লাগে)
      viewport={{ once: true, margin: "-100px" }}
      
      // অ্যানিমেশনটি কত স্মুথ হবে তার সেটিংস
      transition={{ 
        duration: 0.6, 
        ease: [0.21, 1.02, 0.43, 1.01], // কাস্টম বেজিয়ার কার্ভ (খুব স্মুথ প্রিমিয়াম ফিল দেবে)
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
}