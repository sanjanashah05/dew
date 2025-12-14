export default function About() {
  return (
    <div className="min-h-screen bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-semibold text-brown-dark mb-6">
          About Us
        </h1>

        <div className="space-y-6 text-lg leading-8 text-brown-medium">
          <p>
            Welcome to DEW, where innovation meets excellence. We are dedicated to
            providing exceptional solutions that transform the way you work and live.
          </p>

          <p>
            Our team of passionate professionals brings together years of experience
            and expertise to deliver products and services that exceed expectations.
            We believe in pushing boundaries and creating value for our clients.
          </p>

          <p>
            At DEW, we're committed to building lasting relationships based on trust,
            transparency, and exceptional results. Our mission is to empower individuals
            and businesses to reach their full potential.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-pink-light p-8 border border-pink-medium">
            <h3 className="text-xl font-semibold text-brown-dark mb-3">
              Our Vision
            </h3>
            <p className="text-brown-medium leading-relaxed">
              To be the leading force in innovation, creating solutions that shape
              the future.
            </p>
          </div>

          <div className="rounded-2xl bg-pink-light p-8 border border-pink-medium">
            <h3 className="text-xl font-semibold text-brown-dark mb-3">
              Our Mission
            </h3>
            <p className="text-brown-medium leading-relaxed">
              To deliver exceptional value through cutting-edge technology and
              unparalleled service.
            </p>
          </div>

          <div className="rounded-2xl bg-pink-light p-8 border border-pink-medium">
            <h3 className="text-xl font-semibold text-brown-dark mb-3">
              Our Values
            </h3>
            <p className="text-brown-medium leading-relaxed">
              Innovation, integrity, and excellence drive everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
