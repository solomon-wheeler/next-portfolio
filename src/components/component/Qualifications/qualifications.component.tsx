export default function Qualifications() {
  const modules = [
    { name: 'Computer systems architecture 1 & 2', mark: 81 },
    { name: 'Discrete mathematics and database', mark: 95 },
    { name: 'Principles of programming 1 & 2', mark: 81 },
    { name: 'Mathematics for computation', mark: 76 },
    { name: 'Artificial intelligence', mark: 84 },
    { name: 'Software processes and modelling', mark: 68 },
    { name: 'Extended systems project', mark: 82 },
    { name: 'Machine learning', mark: 92 },
    { name: 'Foundations of computation', mark: 84 },
    { name: 'Visual computing', mark: 75 },
    { name: 'Data structures and algorithms', mark: 98 },
    { name: 'Human-computer interaction and user experience', mark: 84 },
  ];

  return (
    <section className="py-12 md:py-24 lg:py-32 xl:py-48" key="section3">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-black dark:text-white tracking-tighter sm:text-4xl md:text-5xl">
              Qualifications
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I am currently studying a degree in Computer Science at the
              University of Bath. Here are some of the modules I have studied:
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-black dark:text-white">
                Modules
              </h2>
              {modules.map((module, index) => (
                <li className="text-black dark:text-white" key={index}>
                  {module.name}
                </li>
              ))}
            </div>
            <div className="p-4 bg-white shadow-md rounded-md dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-black dark:text-white">
                Marks
              </h2>
              {modules.map((module, index) => (
                <li className="text-black dark:text-white" key={index}>
                  {module.mark}%
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
