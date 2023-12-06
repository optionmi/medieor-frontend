import Header from "./ui/header";
import { FaSearch, FaEnvelope } from "react-icons/fa";
import styles from "./ui/home/home.module.css";
import { FaAngleLeft, FaAngleRight, FaClock, FaEye } from "react-icons/fa6";
import Poll from "./ui/home/poll";
import Categories from "./ui/home/categories";
import no_avatar from "./assets/no-avatar.png";

export default function Home() {
  return (
    <>
      <Header />
      <section className="mb-10">
        <div className="relative">
          <div className={`${styles.hero_bg} relative`}>
            <div className="flex flex-col items-center p-5 text-4xl leading-snug text-white sm:text-6xl sm:absolute bottom-60 right-20">
              <h1>The contribution of</h1>
              <h1>(Soil - Mitti)</h1>
              <h1>
                in <span className="font-bold">healing</span> the
                <span className="font-bold"> earth</span>
              </h1>
            </div>
          </div>
          <div className="absolute left-0 right-0 z-10 flex items-end justify-around h-24 bottom-10">
            <div className="w-20 h-20 bg-white rounded-full "></div>
            <div className="self-start w-20 h-20 bg-white rounded-full "></div>
            <div className="w-20 h-20 bg-white rounded-full "></div>
          </div>
          <div className="bg-[#a48159cc] absolute bottom-0 left-0 right-0 h-24 p-2 ellipse-clip">
            {/* <div className="container relative flex justify-around mx-auto"></div> */}
          </div>
        </div>
      </section>

      <main className="container mx-auto my-5">
        <section className="flex flex-col justify-between gap-5 sm:flex-row ">
          <div className="w-full p-5 sm:w-3/5">
            <h1 className="text-4xl leading-normal sm:text-5xl">
              My Contribution in healing <br />
              <span className="font-bold"> Mitti</span> of the
              <span className="font-bold"> earth</span>
            </h1>
            <p className="my-5 text-2xl">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution.
            </p>
            <div className="flex justify-between gap-4 px-2 my-10">
              <p>
                <span className="text-3xl sm:text-5xl">54+</span>
                <br />{" "}
                <span className="text-xl sm:text-2xl"> Community Groups</span>
              </p>
              <p>
                <span className="text-3xl sm:text-5xl">27+</span> <br />{" "}
                <span className="text-xl sm:text-2xl"> Upcoming Events</span>
              </p>
              <p>
                <span className="text-3xl sm:text-5xl">1000+</span> <br />{" "}
                <span className="text-xl sm:text-2xl"> Registered Members</span>
              </p>
            </div>
          </div>
          <div className="w-full p-2 sm:w-2/5">
            <div className="p-5 border border-black sm:p-10 bottom-1">
              <h1 className="pb-5 text-3xl border-b-2 border-gray-600">
                Last Active Groups
              </h1>
              <ul>
                {[1, 2, 3, 4].map((i) => (
                  <li
                    key={i}
                    className="flex justify-between py-5 border-b-2 border-gray-600"
                  >
                    <div>
                      <h2 className="text-xl">Mitti for all</h2>
                      <span className="text-gray-500">Public Group</span>
                    </div>
                    <div className="text-gray-500 text-end">
                      <span>Created 2 months ago</span>
                      <br />
                      <span>800 members</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <section className="my-5 bg-[#ecf0f1] py-10 px-2">
        <div className="container mx-auto">
          <h1 className="my-10 text-5xl">
            My Forward to the <span className="font-bold">Healing</span>
          </h1>
        </div>
        <div className="py-5 bg-white ">
          <div className="container flex flex-col items-center justify-center gap-5 mx-auto sm:flex-row">
            <div className="flex">
              <input
                className="p-2 bg-[#f4f5f9]"
                type="text"
                placeholder="Search Topics"
              />
              <div className="text-white bg-[#697684] p-3">
                <FaSearch />
              </div>
            </div>
            <button className="px-4 py-2 bg-[#1cbb9b] text-white rounded-sm">
              Start New Topic
            </button>

            <div className="p-3">
              <FaEnvelope color="#ced2d3" size={30} />
            </div>
            <div>
              <img src={no_avatar} width={48} height={48} alt="avatar" />
            </div>
          </div>
        </div>

        <div className="container flex flex-col mx-auto sm:flex-row">
          <div className="w-full sm:w-3/5 xl:w-2/3">
            <div className="flex flex-wrap items-center justify-center gap-5 p-5">
              <FaAngleLeft color="#d0d4d7" size={20} />
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                // TODO Active state style
                <a
                  key={i}
                  className="bg-[#d0d4d7] py-2 px-4 text-white font-bold rounded-sm"
                  href="#"
                >
                  {i}
                </a>
              ))}
              <FaAngleRight color="#d0d4d7" size={20} />
            </div>

            {/* <div className="w-full sm:w-2/5 xl:w-1/3"></div> */}
          </div>
        </div>

        <div className="container flex flex-col gap-5 mx-auto sm:flex-row">
          <div className="w-full px-5 sm:w-3/5 xl:w-2/3">
            <ul className="flex flex-col gap-5">
              {[1, 2, 3, 4].map((i) => (
                <li
                  key={i}
                  className="flex flex-col items-center justify-center gap-8 p-5 bg-white rounded-sm shadow-sm sm:flex-row"
                >
                  <div>
                    <img
                      src={no_avatar}
                      width={100}
                      height={100}
                      alt="avatar"
                    />
                  </div>

                  <div>
                    <h1 className="text-2xl font-semibold">
                      What Instagram ads will look like
                    </h1>
                    <p className="py-2">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Dolore eaque dolorum fuga est? Autem tempora facere sed
                      nisi! Ullam, asperiores laboriosam! Vitae modi beatae
                      voluptates autem vero commodi minima expedita.
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-between w-52">
                    <div className="bg-[#bdc4c8] px-4 pt-3 pb-4 text-white font-semibold rounded-sm posts-clip">
                      <span className="text-xl">89</span>
                    </div>
                    <div className="flex flex-col items-center w-full text-gray-500">
                      <div className="flex items-center justify-center w-full gap-2 text-sm">
                        <FaEye size={15} color="#ced2d3" />
                        <span>1560</span>
                      </div>
                      <div className="flex items-center justify-center w-full gap-2 text-sm">
                        <FaClock size={13} color="#ced2d3" />
                        <span>24 min</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full sm:w-2/5 xl:w-1/3">
            <div className="p-5 bg-white rounded-md">
              <Categories />
            </div>

            <div className="p-5 my-5 bg-white rounded-md">
              <Poll />
            </div>
          </div>
        </div>
      </section>
      <footer className="p-10 bg-[#a48159]"></footer>
    </>
  );
}
