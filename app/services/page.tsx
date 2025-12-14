export default function Services() {
  const services = [
    {
      title: "Consulting",
      description:
        "Strategic guidance and expert advice to help your business navigate complex challenges and achieve sustainable growth.",
    },
    {
      title: "Development",
      description:
        "Custom software solutions built with cutting-edge technology, tailored to your specific needs and requirements.",
    },
    {
      title: "Design",
      description:
        "Beautiful, intuitive interfaces that provide exceptional user experiences and bring your vision to life.",
    },
    {
      title: "Analytics",
      description:
        "Data-driven insights and intelligence to help you make informed decisions and optimize performance.",
    },
    {
      title: "Support",
      description:
        "Dedicated customer support and maintenance to ensure your systems run smoothly and efficiently.",
    },
    {
      title: "Training",
      description:
        "Comprehensive training programs to empower your team with the skills and knowledge they need to succeed.",
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-semibold text-brown-dark mb-6">
            Our Services
          </h1>
          <p className="text-xl text-brown-medium max-w-2xl mx-auto">
            Comprehensive solutions designed to meet your unique needs and drive
            exceptional results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-pink-light p-8 border border-pink-medium transition-all hover:border-pink-dark hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-brown-dark mb-4">
                {service.title}
              </h3>
              <p className="text-brown-medium leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
