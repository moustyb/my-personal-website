const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="text-center py-12 bg-indigo-600 text-white">
        <h1 className="text-4xl font-bold">Hi there,This is Mustafa's Personal Website</h1>
        <p className="text-xl mt-4">A student I am learning HTML,CSS,JS and Pyhton.</p>
      </header>

      {/* Bio Section */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto">
          I live in San Francisco, CA and I am learning coding.
      I like coffee. My hobbies include reading books, traveling, visiting museums, tasting international cuisine, 
      and exploring new places that inspire me. My favorite food is sushi, and I also enjoy drinking green tea.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-100 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-lg">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>HTML & CSS</li>
            <li>Node.js</li>
            <li>Git & GitHub</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">Feel free to reach out for collaborations, questions, or just to say hi!</p>
        <a
          href="mailto:mustafae@gmail.com"
          className="text-xl text-indigo-600 hover:underline"
        >
          mustafa@gmail.com
        </a>
      </section>

      {/* Footer Section */}
      <footer className="py-4 bg-gray-800 text-white text-center">
        <p>Built with love using Next.js & Tailwind CSS</p>
        <p>&copy; 2025 mbay</p>
      </footer>
    </div>
  );
};

export default Page;
