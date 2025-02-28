import { motion } from 'framer-motion';

export default function Button({ text, onClick }) {
    return (
        <motion.button
            whileHover={{
                scale: 1.1,
                boxShadow: '0px 0px 20px rgba(255, 0, 0, 0.7)',
            }}
            whileTap={{ scale: 0.95 }}
            className='px-6 py-3 text-lg font-semibold text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-lg transition-all duration-300 hover:bg-[#D72638] hover:border-[#D72638]'
            onClick={onClick}
        >
            {text}
        </motion.button>
    );
}
