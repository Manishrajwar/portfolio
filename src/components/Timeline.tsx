import { motion } from 'framer-motion';
import { ExternalLink } from "lucide-react";


const timelineData = [
  {
    year: '2023',
    title: 'Frontend Developer Internship',
    certificate:"https://drive.google.com/file/d/1tx1W-Xb_EQ85pm79oKrGHSLdxRtfvDeo/view?usp=sharing",
    description: 'Assisted in the design and development of 5+ software applications, contributing to a 20% faster time-to-market by streamlining the coding process Contributed to the development of a new feature that increased customer engagement by 15%. Optimized existing codebase, resulting in a 10% reduction in processing time.',
    tech: ['HTML', 'Tailwind CSS','Javascript', 'React.js']
  },
  {
    year: '2023',
    title: 'Full Stack developer training At SUNIC',
    description: 'Designed scalable cloud infrastructure and microservices architecture.',
    certificate:"https://drive.google.com/file/d/1g0u9rfmLW-uJo_fH-d6oWaxiiiT2N4-_/view?usp=sharing",
    tech: ['HTML','CSS','JavaScript','React.js','Node.js','Express.js','MongoDB','Github']
  },
  {
    year: '2024',
    title: 'Full stack developer Internship at KushelDigi Solution',
    description: 'Developed and implemented software applications for 3+ major projects, increasing development speed by 30% and reducing bugs by 15%.',
    certificate:"https://drive.google.com/file/d/1JEAs5U7dABoV5NBhMIEIfIMarU_O8J5H/view?usp=sharing",
    tech: ['HTML','CSS','Vanilla JavaScript','React.js','Next.js','Node.js','Express.js','MongoDB','Github','PHP','Wordpress']
  },
  {
    year: '2024',
    title: 'React.js with Firebase Internship',
    description: 'Developed responsive web applications using React.js and Firebase for real-time database integration and user authentication.',
    certificate:"https://drive.google.com/file/d/13EszImtnalVSfn8SC0MOLaCHKSVHYzEl/view?usp=sharing",
    tech: ['JavaScript', 'React.js', 'Firebase']
  },
  {
    year: '2025',
    title: 'Learning DevOps',
    certificate:"https://www.linkedin.com/in/manish-rajwar-5b4070265/recent-activity/all/",
    description: 'Currently learning DevOps concepts, tools, and practices including CI/CD pipelines, Docker, Kubernetes, AWS, and Ansible to streamline software development and deployment.',
    tech: ['Python','Bash Script','Docker', 'Kubernetes', 'AWS', 'Ansible', 'CI/CD']
  }
  
  
];

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 h-full w-0.5 bg-blue-500/20 dark:bg-blue-500/10"></div>
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`relative mb-12 ${
            index % 2 === 0 ? 'ml-auto pl-8 pr-4' : 'mr-auto pr-8 pl-4'
          } w-1/2`}
        >
          <div className="absolute top-0 w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400"
               style={{ [index % 2 === 0 ? 'left' : 'right']: '-6px' }}></div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <span className="text-blue-500 font-bold">{item.year}</span>
            <div className='flex  gap-3 items-center'>
            <h3 className="text-xl font-bold mt-2 dark:text-white">{item.title}</h3>
            <a  href={item?.certificate}  target="_blank"  rel="noopener noreferrer"  className="mt-2 cursor-pointer">
               <ExternalLink size={24} color="blue" />
            </a>      
          </div>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {item.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}