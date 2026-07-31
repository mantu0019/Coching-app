import { motion } from "framer-motion";
import { coursesOffered } from "../../config/couresesOffered";

const CoursesOffered = () => {
  return (
    <section className="py-10 relative">
      <div className="max-w-7xl mx-auto px-5">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text text-4xl font-bold text-center mb-3 text-gray-800"
        >
          Courses Offered
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-500 mb-12"
        >
          Prepare for Government Exams with Expert Faculty
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coursesOffered.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="rounded-2xl p-6 border border-white/60 bg-white/60 backdrop-blur-md shadow-md hover:shadow-s transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold flex items-center gap-2 text-orange-700 mb-5">
                <motion.span
                  className="text-3xl"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {course.icon}
                </motion.span>
                {course.title}
              </h3>

              <ul className="space-y-3">
                {course.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="w-2 h-2 rounded-full bg-orange-600 shrink-0"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesOffered;