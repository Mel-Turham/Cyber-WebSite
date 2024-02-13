import './ButtonSecondary.scss';
import { motion } from 'framer-motion';
const ButtonSecondary = () => {
	return <motion.button whileHover={{
		scale:1.2,
		rotate:.8
	}} 
	
	whileTap={{
		scale:1.3
	}}
	className='btn-secondary'>Buy now</motion.button>;
};

export default ButtonSecondary;
