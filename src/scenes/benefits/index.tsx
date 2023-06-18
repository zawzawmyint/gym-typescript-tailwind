import Htext from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "lorem ipsum dolor sit amet, consectetur adip incididunt",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "lorem ipsum dolor sit amet, consectetur adip incididunt",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "lorem ipsum dolor sit amet, consectetur adip incididunt",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER  */}
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-20 md:w-3/5"
        >
          <Htext>MORE THAN JUST A GYM</Htext>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            eaque pariatur fugiat quam, ducimus dolore sed autem eum esse cum
            vel molestiae? Officiis, labore id in necessitatibus odio numquam
            harum!
          </p>
        </motion.div>
        {/* BENEFITS  */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="mt-5 items-center justify-between gap-8 md:flex"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHIC AND DESCRIPTON */}
        <div className="mt-20  items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHITC  */}
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 1 },
            }}
          >
            <img
              className="mx-auto "
              alt="benefits-page-graphic"
              src={BenefitsPageGraphic}
            />
          </motion.div>

          {/* DESCRIPTION  */}
          <div>
            {/* TITLE  */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Htext>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-seocndary-500">FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION  */}
            <motion.div
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mt-10"
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus similique iusto consequatur praesentium laborum quae
                dolorem tempore quis ut totam, cupiditate sed perferendis earum
                asperiores sequi temporibus maiores a nihil!
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                dolorum! Eius minima voluptatem sint itaque incidunt at ea, cum
                esse sapiente dignissimos vero nobis, deserunt quam sequi
                similique tenetur. Quidem?
              </p>
            </motion.div>
            {/* BUTTON  */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:left-32 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
