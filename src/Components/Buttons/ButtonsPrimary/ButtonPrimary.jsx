import './ButtonPrimary.scss';
import { motion } from 'framer-motion';

const ButtonPrimary = () => {
	return (
		<motion.button
			initial={{ opacity: 0.5, y: -1 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 2,
				ease: 'easeInOut',
				repeat: Infinity,
			}}
			className='buttonPrimary'
		>
			Shop Now
		</motion.button>
	);
};

export default ButtonPrimary;
