import { FaReact, FaGithub, FaJava, FaHtml5, FaCss3 } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb, SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Competencias() {
  return (
    <>
      <div className="alturaCompetenciaPag font-abc tracking-widest md:px-16 px-4 bg-slate-900">
        <div className="pt-10 w-full h-full text-white 2xl:text-xl text-lg abc">
          <div className="w-full md:h-1/5 h-1/6">
            <div className="text-emerald-500">
              <p>../Competencias</p>
            </div>
            <div className="text-2xl 2xl:text-4xl mt-4">
              <p>Conhecimentos</p>
            </div>
          </div>
          <motion.div className="h-4/6  md:mt-10 mt-4">
            <div className="grid md:h-1/3 h-2/4 md:grid-cols-4 grid-cols-2 gap-4">
              <motion.div
                className="bg-gray-600 rounded-xl"
                variants={cardVariants}
                whileInView="visible"
                initial="hidden"
                transition={{ duration: 0.5 }}
              >
                <div className="px-4 w-full flex items-center 2xl:text-xl text-sm flex h-full">
                  <div className="w-4/5 flex flex-col h-3/5 items-start md:justify-between justify-center">
                    <div className="text-white mb-4">REACT</div>
                    <div className="text-white">Experiência de 1 ano</div>
                  </div>
                  <div className="w-1/5 h-3/5 flex flex-col justify-start items-center">
                    <FaReact fontSize={30} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-600 rounded-xl"
                variants={cardVariants}
                whileInView="visible"
                initial="hidden"
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="px-4 w-full flex items-center 2xl:text-xl text-sm flex h-full">
                  <div className="w-4/5 flex flex-col h-3/5 items-start md:justify-between justify-center">
                    <div className="text-white mb-4">JAVA</div>
                    <div className="text-white">Experiência de 1 ano</div>
                  </div>
                  <div className="w-1/5 h-3/5 flex flex-col justify-start items-center">
                    <FaJava fontSize={30} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-600 rounded-xl"
                variants={cardVariants}
                whileInView="visible"
                initial="hidden"
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="px-4 w-full flex items-center 2xl:text-xl text-sm flex h-full">
                  <div className="w-4/5 flex flex-col h-3/5 items-start md:justify-between justify-center">
                    <div className="text-white mb-4">POSTGRE-SQL</div>
                    <div className="text-white">Experiência de 1 ano</div>
                  </div>
                  <div className="w-1/5 h-3/5 flex flex-col justify-start items-center">
                    <BiLogoPostgresql fontSize={30} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-600 rounded-xl"
                variants={cardVariants}
                whileInView="visible"
                initial="hidden"
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="px-4 w-full flex items-center 2xl:text-xl text-sm flex h-full">
                  <div className="w-4/5 flex flex-col h-3/5 items-start md:justify-between justify-center">
                    <div className="text-white mb-4">MONGO</div>
                    <div className="text-white">Experiência de 1 ano</div>
                  </div>
                  <div className="w-1/5 h-3/5 flex flex-col justify-start items-center">
                    <SiMongodb fontSize={30} />
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid md:h-1/3 h-2/4 mt-6 md:grid-cols-4 grid-cols-2 gap-4">
              <motion.div
                className="bg-gray-600 rounded-xl"
                variants={cardVariants}
                whileInView="visible"
                initial="hidden"
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="px-4 w-full flex items-center 2xl:text-xl text-sm flex h-full">
                  <div className="w-4/5 flex flex-col h-3/5 items-start md:justify-between justify-center">
                    <div className="text-white mb-4">HTML</div>
                    <div className="text-white">Experiência de 1 ano</div>
                  </div>
                  <div className="w-1/5 h-3/5 flex flex-col justify-start items-center">
                    <FaHtml5 fontSize={30} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-600 rounded-xl"
                variants={cardVariants}
                whileInView="visible"
                initial="hidden"
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="px-4 w-full flex items-center 2xl:text-xl text-sm flex h-full">
                  <div className="w-4/5 flex flex-col h-3/5 items-start md:justify-between justify-center">
                    <div className="text-white mb-4">CSS</div>
                    <div className="text-white">Experiência de 1 ano</div>
                  </div>
                  <div className="w-1/5 h-3/5 flex flex-col justify-start items-center">
                    <FaCss3 fontSize={30} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-600 rounded-xl"
                variants={cardVariants}
                whileInView="visible"
                initial="hidden"
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="px-4 w-full flex items-center 2xl:text-xl text-sm flex h-full">
                  <div className="w-4/5 flex flex-col h-3/5 items-start md:justify-between justify-center">
                    <div className="text-white text-xs mb-4">SPRINGBOOT</div>
                    <div className="text-white">Experiência de 1 ano</div>
                  </div>
                  <div className="w-1/5 h-3/5 flex flex-col justify-start items-center">
                    <SiSpringboot fontSize={30} />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-600 rounded-xl"
                variants={cardVariants}
                whileInView="visible"
                initial="hidden"
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="px-4 w-full flex items-center 2xl:text-xl text-sm flex h-full">
                  <div className="w-4/5 flex flex-col h-3/5 items-start md:justify-between justify-center">
                    <div className="text-white mb-4">GIT HUB</div>
                    <div className="text-white">Experiência de 1 ano</div>
                  </div>
                  <div className="w-1/5 h-3/5 flex flex-col justify-start items-center">
                    <FaGithub fontSize={30} />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
