const fs = require('fs');
let content = fs.readFileSync('src/pages/Services.jsx', 'utf8');

const vmSlides = `  const slides = [
    {
      title: "Software Development",
      subtitle: "SOFTWARE DEVELOPMENT",
      description: "We build scalable, high-performance software tailored to your business. From web platforms to custom tools, we turn complex challenges into clean, reliable solutions.",
      image: servicesBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "SOFTWARE\\nDEVELOPMENT",
      detail: "Custom solutions",
    },
    {
      title: "Microsoft Licensing",
      subtitle: "MICROSOFT LICENSING",
      description: "Simplify your Microsoft licensing with expert guidance. We help you find the right plans, reduce costs, and stay fully compliant across your organisation.",
      image: microsoftLicensingBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "MICROSOFT\\nLICENSING",
      detail: "License management",
    },
    {
      title: "IT Services",
      subtitle: "IT SERVICES & INFRASTRUCTURE",
      description: "Robust and reliable IT infrastructure to support your business operations. We provide end-to-end IT services, network management, and support to ensure smooth daily operations.",
      image: itInfrastructureBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "IT SERVICES &\\nINFRASTRUCTURE",
      detail: "Infrastructure support",
    },
    {
      title: "Digital Transformation",
      subtitle: "DIGITAL TRANSFORMATION CONSULTING",
      description: "Empower your business with strategic digital transformation. We help you modernize processes, adopt new technologies, and drive innovation for sustainable growth.",
      image: digitalTransformationBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "DIGITAL\\nTRANSFORMATION",
      detail: "Strategic consulting",
    },
    {
      title: "AI & Intelligent Tech",
      subtitle: "AI AND INTELLIGENT TECHNOLOGY CAPABILITIES",
      description: "Unlock the power of artificial intelligence. We build and integrate intelligent solutions that automate tasks, analyze data, and create smarter experiences for your business.",
      image: aiTechnologyBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "AI & INTELLIGENT\\nTECHNOLOGY",
      detail: "AI Capabilities",
    },
    {
      title: "Cybersecurity",
      subtitle: "CYBERSECURITY SERVICES",
      description: "Protect your business from evolving threats. We provide comprehensive cybersecurity services, risk assessments, and proactive defense strategies to keep your data secure.",
      image: cybersecurityBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "CYBERSECURITY\\nSERVICES",
      detail: "Security defense",
    },
    {
      title: "Mobile App Dev",
      subtitle: "MOBILE APPLICATION DEVELOPMENT",
      description: "Build engaging and intuitive mobile experiences. We design and develop custom iOS and Android applications that delight users and drive your business forward on the go.",
      image: mobileAppBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "MOBILE APP\\nDEVELOPMENT",
      detail: "Mobile solutions",
    },
    {
      title: "Workplace Solutions",
      subtitle: "WORKPLACE AND COLLABORATION SOLUTIONS",
      description: "Empower your team with modern workplace solutions. We provide collaboration tools and platforms that connect your people, streamline workflows, and boost productivity anywhere.",
      image: workplaceBackground,
      location: "VM Technologies",
      cardLabel: "VM Technologies · Services",
      cardTitle: "WORKPLACE &\\nCOLLABORATION",
      detail: "Team productivity",
    },
  ];`;

// Replace the switzerland alps slides with VM tech slides
content = content.replace(/const slides = \\[[\\s\\S]*?\\n  \\];/s, vmSlides);

// Also we need to fix all the escaped variables: \\\` to `, \\$ to $
content = content.replace(/\\\`/g, '\`');
content = content.replace(/\\\$/g, '$');

fs.writeFileSync('src/pages/Services.jsx', content);
