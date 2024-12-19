import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { id: 1, name: 'Global clients', value: '500+' },
  { id: 2, name: 'Success rate', value: '98%' },
  { id: 3, name: 'Industry experts', value: '250+' },
  { id: 4, name: 'ROI delivered', value: '300%' },
];

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative bg-blue-600 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.dl
          ref={ref}
          className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: stat.id * 0.1 }}
            >
              <dt className="text-base leading-7 text-blue-200">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </div>
  );
}