/* =====================================================================
   WEBSITE CONTENT: Dr. Abul Barkat Mollah Sayeed Ud Doulah
   This is the ONLY file you need to edit to change the website text.

   How to edit on GitHub: open this file, click the pencil icon, make
   your change, then click "Commit changes". The site updates in 1-2 min.

   Rules (the site goes blank if one is broken):
   - Keep text inside "double quotes". To use a quote mark inside text,
     use the curly ones “ ” or write \" instead.
   - Every item in a list ends with a comma, except the last one.
   - true / false are written without quotes.
   If the site goes blank after an edit: open this file's "History" on
   GitHub and compare with the previous version to find the typo.

   Common tasks
   - New publication: copy one { ... } entry in "publications", paste it
     at the top of that list, edit it. Put **double asterisks** around
     your name to show it in bold. "selected": true puts it on the
     homepage. "type" is one of: journal, conference, abstract, review.
     "doi" is optional; leave it out if there is none.
   - New project: copy an entry in "projects". "featured": true shows
     it on the homepage.
   - CV: upload the PDF into the "files" folder, then set
     "cvPdf": "files/YOUR-FILE-NAME.pdf"
   - Text written as [Information to be added] appears highlighted on
     the site until you replace it.
   ===================================================================== */

window.SITE = {
  "name": "Dr. Abul Barkat Mollah Sayeed Ud Doulah",
  "shortName": "A B M Sayeed Ud Doulah",
  "positions": [
    {
      "title": "Associate Professor",
      "unit": "Department of Electrical and Electronic Engineering",
      "org": "Southeast University, Dhaka, Bangladesh"
    },
    {
      "title": "Additional Director",
      "unit": "Institutional Quality Assurance Cell (IQAC)",
      "org": "Southeast University"
    }
  ],
  "photoAlt": "Portrait of Dr. Abul Barkat Mollah Sayeed Ud Doulah",
  "intro": "Dr. Abul Barkat Mollah Sayeed Ud Doulah is an Associate Professor of Electrical and Electronic Engineering at Southeast University, Dhaka, where he also serves as Additional Director of the Institutional Quality Assurance Cell. His research applies machine learning and biomedical signal processing to wearable and low-cost sensing systems, with a focus on healthcare in resource-constrained settings: dietary monitoring, maternal health, pediatric respiratory screening, and assistive technology for children with autism. He earned his Ph.D. in Electrical Engineering from the University of Alabama, where his dissertation developed a wearable sensor system for automatic food-intake detection. Across more than eleven years of university teaching in electronics, circuits, signal processing and control, he has also contributed to outcome-based curriculum design, quality assurance and engineering accreditation in Bangladesh.",
  "links": {
    "scholar": "https://scholar.google.com/citations?user=LerqP3wAAAAJ&hl=en",
    "orcid": "https://orcid.org/0000-0002-8161-6602",
    "researchgate": "https://www.researchgate.net/profile/Abul_Doulah",
    "linkedin": "https://bd.linkedin.com/in/a-b-m-sayeed-ud-doulah-ba650257",
    "email": "sayeed.doulah@seu.edu.bd",
    "cvPdf": ""
  },
  "cvUpdated": "2026",
  "statement": {
    "title": "Wearable sensing and machine learning for affordable healthcare",
    "text": "His work brings together three layers: sensors that sit on or near the body, signal-processing methods that turn raw physiological data into meaningful features, and machine-learning models that make those features useful for screening and monitoring. The aim is engineering that remains practical where clinical resources are limited, built from low-cost hardware, embedded and IoT platforms, and validated outside the laboratory as well as inside it."
  },
  "vision": "Many of the health problems that matter most in Bangladesh and similar settings, from pneumonia in toddlers to preeclampsia in rural pregnancies, are hard to monitor because specialist equipment and clinicians are scarce. Dr. Sayeed Ud Doulah's research asks how far affordable sensors, embedded hardware and carefully validated machine learning can close that gap. His projects build devices from low-cost components, such as self-assembled digital stethoscopes and textile and wearable sensors, and develop signal-processing and learning methods that work with noisy, real-world data. A recurring principle, carried over from his doctoral work on free-living dietary monitoring, is that systems must be tested outside the laboratory. Most current projects are at the feasibility or validation stage, and the long-term goal is technology that can be adopted in community and clinical practice.",
  "themes": [
    {
      "title": "Machine learning for healthcare",
      "short": "Machine-learning and deep-learning models that support screening and diagnosis from physiological and clinical data.",
      "long": "Recent work includes progressive semi-supervised learning for multimodal pneumonia diagnosis, parameter-efficient deep learning for preeclampsia prediction from electronic medical records, and collaboration on a foundation model for ECG diagnosis."
    },
    {
      "title": "Biomedical signal processing",
      "short": "Extracting informative features from physiological signals so they can be classified reliably.",
      "long": "This line began with EMG-based classification of neuromuscular diseases using wavelet, DCT and cepstral features, and has extended to EEG motor-imagery detection, respiratory sound analysis and bowel sound analysis."
    },
    {
      "title": "Wearable sensors and activity monitoring",
      "short": "Designing and validating wearable systems for continuous monitoring of behavior and physiology.",
      "long": "Examples include the AIM-2 eyeglass-mounted sensor for automatic food-intake detection, orthosis-mounted sensors for early detection of sit-to-stand transitions, accelerometer-based stress detection for motorcyclists, and a textile-based system for bowel sound analysis."
    },
    {
      "title": "Low-cost IoT and embedded health devices",
      "short": "Affordable embedded and connected devices for settings with limited clinical infrastructure.",
      "long": "Current work includes a Raspberry Pi based digital stethoscope with a 1D CNN for pediatric pneumonia, AI-driven IoT maternal-fetal health monitoring, and a LoRa-based emergency wearable for elderly safety."
    },
    {
      "title": "Augmented reality for children with autism",
      "short": "Augmented-reality interventions that help children with autism spectrum disorder develop literacy skills.",
      "long": "The work spans a systematic review, a funded feasibility study, video-based analysis of children's engagement, and a follow-up comprehensive assessment."
    },
    {
      "title": "Image processing and computer vision",
      "short": "Image analysis where visual data complements sensor signals.",
      "long": "His work includes clustering wearable-camera images into food and non-food categories, combining food images with sensor data to improve energy-intake estimation, and extracting video frames to measure engagement."
    }
  ],
  "extraTheme": {
    "title": "Engineering education",
    "long": "He also studies how complex engineering problems can be designed, implemented and assessed in undergraduate programs, drawing on his accreditation and curriculum experience."
  },
  "projects": [
    {
      "title": "MatriBondhu: AI-Driven IoT-Based Maternal-Fetal Health Monitoring in Low-Resource Settings",
      "desc": "An AI-driven IoT system for monitoring maternal and fetal health in low-resource settings, developed with BRAC University and Square Hospitals.",
      "role": "Co-Investigator (PI: Dr. Mirza Rasheduzzaman, BRAC University)",
      "funder": "RSGI, BRAC University",
      "amount": "Tk 6,00,000",
      "period": "2025–2026",
      "area": "IoT, maternal health",
      "status": "Ongoing",
      "featured": true
    },
    {
      "title": "Advancing AR Technology for Literacy in ASD Children: Comprehensive Assessment Following Feasibility Success",
      "desc": "Builds on the completed feasibility study with a fuller evaluation of AR-based literacy support for children with autism.",
      "role": "Principal Investigator",
      "funder": "Southeast University and UIU Institute for Advanced Research",
      "amount": "Tk 5,00,000",
      "period": "[Information to be added]",
      "area": "AR, assistive technology",
      "status": "Ongoing",
      "featured": true
    },
    {
      "title": "Feasibility Study on a Self-Assembled Digital Stethoscope for Automatic Detection of Pneumonia in Toddlers",
      "desc": "A low-cost stethoscope assembled from off-the-shelf parts, paired with machine learning to detect pneumonia from toddlers' respiratory sounds.",
      "role": "Principal Investigator",
      "funder": "ICT Innovation Fund",
      "amount": "Tk 3,00,000",
      "period": "2022–2023",
      "area": "Embedded devices, respiratory health",
      "status": "Ongoing",
      "featured": true
    },
    {
      "title": "Feasibility Study of the Effectiveness of AR Technology in Assisting Children with Autism Spectrum Disorder for Literacy",
      "desc": "Tested whether augmented-reality activities can help children with autism learn alphabets and early literacy.",
      "role": "Principal Investigator",
      "funder": "ULAB and UIU Institute for Advanced Research",
      "amount": "Tk 5,00,000",
      "period": "[Information to be added]",
      "area": "AR, assistive technology",
      "status": "Ongoing",
      "featured": false
    },
    {
      "title": "Designing a Smart Wearable to Keep Our Senior Citizens Safe",
      "desc": "A wearable device designed to improve the safety of older adults.",
      "role": "Co-Investigator (PI: Muhammad Anwarul Azim)",
      "funder": "ICT Innovation Fund",
      "amount": "Tk 4,00,000",
      "period": "2021–2022",
      "area": "Wearables, elderly safety",
      "status": "Ongoing",
      "featured": false
    }
  ],
  "directions": [
    "Wearable textile-based colorectal cancer risk stratification through continuous bowel sound analysis",
    "Machine learning for preeclampsia detection",
    "Automatic stress detection for motorcyclists using accelerometer sensors",
    "AI-based detection of motor-imagery events in EEG signals"
  ],
  "collaborations": [
    "<b>Foundation model for ECG diagnosis</b>: diagnostics and explanations of ECG forms and rhythms, with Professor Mohammad Ali Moni, University of Queensland.",
    "<b>Energy intake estimation using a wearable sensor and food images</b>: laboratory and free-living studies with Professor Edward Sazonov, University of Alabama; funded by the U.S. National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK).",
    "Co-investigators at BRAC University, United International University, Independent University, Bangladesh, and Square Hospitals."
  ],
  "pastResearch": [
    "Validated the AIM-2 wearable sensor for automatic food-intake detection, chew counting and passive food-image capture, using sensor fusion with SVM and ANN classifiers.",
    "Developed regression models for energy-intake estimation in free-living conditions, combining sensor data with food images.",
    "Developed early detection of sit-to-stand transitions from orthosis-mounted sensors for powered orthoses assisting frail older adults (SVM, ELM and ANN).",
    "Clustered food-intake images into food and non-food groups by histogram matching.",
    "Classified neuromuscular diseases from wavelet-domain features of dominant motor unit action potentials in EMG.",
    "Modeled CO₂ emissions from vehicles in Dhaka and the grid impact of electric-vehicle adoption."
  ],
  "about": [
    "Dr. Sayeed Ud Doulah joined Southeast University in February 2025 as Associate Professor in the Department of Electrical and Electronic Engineering, and has served as Additional Director of the university's Institutional Quality Assurance Cell since September 2025. He teaches undergraduate courses, supervises capstone projects, internships and theses, and contributes to curriculum development and departmental seminars.",
    "Before Southeast University, he spent six years at the University of Liberal Arts Bangladesh (ULAB), first as Assistant Professor (2019–2023) and then as Associate Professor (2023–2025). At ULAB he coordinated the EEE program, served as Deputy Director of the Center for Innovation and Technology, and helped prepare the program's Self-Assessment Report for IEB accreditation. He began his academic career as a Lecturer at the Military Institute of Science and Technology (MIST) from 2011 to 2014.",
    "His doctoral research at the University of Alabama (2014–2018), conducted with Professor Edward Sazonov, developed and validated the Automatic Ingestion Monitor version 2 (AIM-2), a wearable sensor that detects eating episodes and passively captures food images. During this period he also trained and mentored students in the research group."
  ],
  "education": [
    {
      "years": "2014–2018",
      "degree": "Ph.D., Electrical Engineering",
      "inst": "The University of Alabama, Tuscaloosa, Alabama, USA",
      "note": "Dissertation: “A Wearable Sensor System for Automatic Food Intake Detection and Energy Intake Estimation in Humans”"
    },
    {
      "years": "2011–2013",
      "degree": "M.Sc., Electrical and Electronic Engineering",
      "inst": "Bangladesh University of Engineering and Technology (BUET), Bangladesh",
      "note": "Thesis: “A Feature Extraction Scheme Based on Spectro-Temporal Analysis of Motor Unit Action Potential of EMG Signal for Neuromuscular Disease Classification”"
    },
    {
      "years": "2007–2010",
      "degree": "B.Sc., Electrical, Electronic and Communication Engineering",
      "inst": "Military Institute of Science and Technology (MIST), Bangladesh",
      "note": "CGPA 3.93/4.00, ranked 2nd in class"
    }
  ],
  "appointments": [
    [
      "Sep 2025–present",
      "Additional Director, IQAC",
      "Southeast University"
    ],
    [
      "Feb 2025–present",
      "Associate Professor, Dept. of EEE",
      "Southeast University"
    ],
    [
      "Apr 2024–Feb 2025",
      "Deputy Director, Center for Innovation and Technology",
      "ULAB"
    ],
    [
      "Dec 2023–Feb 2025",
      "Associate Professor, Dept. of EEE",
      "ULAB"
    ],
    [
      "Jan 2023–Feb 2025",
      "Program Coordinator, EEE",
      "ULAB"
    ],
    [
      "Jan 2019–Nov 2023",
      "Assistant Professor, Dept. of EEE",
      "ULAB"
    ],
    [
      "Aug 2014–Jul 2018",
      "Graduate Research Assistant and student trainer",
      "The University of Alabama"
    ],
    [
      "Jun 2011–Jun 2014",
      "Lecturer, Dept. of EECE",
      "MIST"
    ]
  ],
  "interests": "Machine learning and deep learning; biomedical signal processing; intelligent systems for biomedical engineering; physical activity monitoring; wearable devices and sensors; AR/VR applications for children with special needs; image processing and computer vision.",
  "awards": [
    "Listed in the AD Scientific Index of scientists, 2020–2026",
    "Graduate Research Assistant Scholarship with full tuition waiver, Department of Electrical Engineering, University of Alabama, 2014–2018",
    "Selected participant, Alabama Innovation and Mentoring of Entrepreneurs Center (AIME) [year to be added]",
    "Top Student Award, MIST, 2008, 2009 and 2010"
  ],
  "affiliations": [
    "Member, Institute of Electrical and Electronics Engineers (IEEE)",
    "Program Evaluator, Board of Accreditation for Engineering and Technical Education (BAETE), Institution of Engineers, Bangladesh"
  ],
  "teachingPhilosophy": [
    "Dr. Sayeed Ud Doulah's teaching is built on outcome-based education: each course begins from what students should be able to do, and assessment is designed to show whether they can. Having helped write OBE curricula and assessment rubrics for complex engineering problems, he brings the same structure into his own classes, asking students to work on open-ended problems that have no single correct answer.",
    "Laboratory work is central to how he teaches electronics, signal processing and control, because engineering judgment develops when theory meets measurement. Where it fits, he connects course material to current research in machine learning and biomedical sensing, and he supervises capstone projects and theses that give undergraduates a first experience of research. He has completed formal training in e-learning techniques and data analytics, and uses technology to support, rather than replace, active learning."
  ],
  "teachingSnapshot": "He teaches undergraduate courses and laboratories in electronics, signals and systems, digital signal processing, VLSI and control, and supervises final-year capstone projects, internships and theses.",
  "courses": [
    {
      "area": "Electronics and devices",
      "items": [
        "Electronics I",
        "Electronics II",
        "Electronics I/II Laboratory",
        "Digital Electronics and Laboratory",
        "VLSI I Laboratory",
        "VLSI II Laboratory",
        "Properties of Materials"
      ]
    },
    {
      "area": "Circuits, signals and control",
      "items": [
        "Electrical Circuit I Laboratory",
        "Signals and Systems",
        "Digital Signal Processing I",
        "Digital Signal Processing I Laboratory",
        "Control System I Laboratory"
      ]
    },
    {
      "area": "Computation",
      "items": [
        "Numerical Methods Laboratory"
      ]
    }
  ],
  "workshops": [
    "Faculty development workshop, “Enhancing Teaching with Outcome-Based Education (OBE), Bloom's Taxonomy, and Accreditation,” Southeast University",
    "Department-level BNQF workshop, Southeast University, 20 November 2025 (organizer)",
    "Seminar, “Innovative Research Ideas,” covering 20 innovation domains including renewable energy, robotics and AI, for EEE students, Southeast University",
    "Keynote and workshop, “Familiarization with Biomedical Signals and its Application,” ULAB, July 2020",
    "Keynote and two-day hands-on workshop on machine learning, ULAB, November 2019",
    "Keynote and hands-on workshop on machine learning, ULAB, August 2019"
  ],
  "leadershipSnapshot": "At Southeast University he leads institution-wide outcome-based education, curriculum review for BAC and BAETE accreditation, and faculty development through the IQAC. He is a BAETE Program Evaluator.",
  "serviceIntro": "Alongside teaching and research, Dr. Sayeed Ud Doulah works on academic quality: how programs define outcomes, measure them and improve. This work spans institutional quality assurance at Southeast University, program coordination at ULAB, and national engineering accreditation.",
  "service": [
    {
      "group": "Quality assurance and accreditation",
      "items": [
        [
          "Additional Director, Institutional Quality Assurance Cell, Southeast University",
          "September 2025–present",
          "Directs curriculum review for all departments seeking BAC and BAETE accreditation; manages the institution-wide OBE process; led the drafting and revision of the university strategic plan; organizes faculty development, including workshops on complex engineering problems and capstone projects."
        ],
        [
          "Program Evaluator, BAETE, Institution of Engineers, Bangladesh",
          "",
          "Completed the hands-on orientation for new program evaluators (May 2022) and attended the International Symposium on Quality Assurance in Engineering Education Through Accreditation-III (May 2023)."
        ],
        [
          "ISO Internal Auditor, ULAB",
          "May 2022–February 2025",
          "Audited IT, communications and co-curricular offices."
        ],
        [
          "Member, Program Quality Assurance Committee, ULAB",
          "May 2023–February 2025",
          ""
        ]
      ]
    },
    {
      "group": "Academic administration",
      "items": [
        [
          "Program Coordinator, EEE, ULAB",
          "January 2023–February 2025",
          "Led academic planning and helped prepare the Self-Assessment Report for IEB accreditation."
        ],
        [
          "Deputy Director, Center for Innovation and Technology, ULAB",
          "April 2024–February 2025",
          "Drafted a research proposal on AI-supported electric-vehicle incubation and consulted with Bureau Veritas on non-destructive testing for predictive maintenance."
        ],
        [
          "Member, Curriculum Committee, ULAB",
          "June 2019–February 2025",
          "Contributed to the OBE curriculum and designed assessment rubrics for complex engineering problems."
        ],
        [
          "Advisor, IEEE Robotics and Automation Society ULAB Student Branch Chapter",
          "December 2021–February 2025",
          "Prepared the chapter's founding application and organized its inaugural ceremony."
        ]
      ]
    },
    {
      "group": "Conference and editorial service",
      "items": [
        [
          "Publication Chair",
          "",
          "iCACCESS 2024, Dhaka; IEEE RAAICON 2024, Dhaka"
        ],
        [
          "Technical Session Chair",
          "",
          "iCACCESS 2024; 6th ICEEICT 2024; 25th ICCIT 2022"
        ],
        [
          "Technical Co-Chair",
          "",
          "5th ICAEE 2019, Independent University, Bangladesh"
        ],
        [
          "Review Editor",
          "",
          "Frontiers in Nutrition"
        ],
        [
          "Reviewer",
          "",
          "Scientific Reports; Elsevier journals; IEEE Transactions; IEEE Access; Electronics and Nutrients (MDPI); Journal of Experimental & Theoretical Artificial Intelligence (Taylor & Francis); IEEE EMBC 2017 and 2018; IEEE TENSYMP 2020; IEEE ICAICT 2020; IJCCI 2019; IEEE BECITHCON 2019 and 2024"
        ]
      ]
    },
    {
      "group": "Professional development",
      "items": [
        [
          "Certificate in e-Learning and Technique (CeLT)",
          "2021",
          "Foundation for Learning Teaching and Research"
        ],
        [
          "Data analytics course",
          "2022",
          "Center for Excellence in Teaching and Learning"
        ]
      ]
    }
  ],
  "students": {
    "intro": "Dr. Sayeed Ud Doulah supervises final-year capstone projects, internships and undergraduate theses in the Department of EEE at Southeast University, and did so previously at ULAB. His publication record includes peer-reviewed papers co-authored with students he has supervised.",
    "current": "[Information to be added]",
    "completed": "[Information to be added]",
    "prospective": "Students interested in machine learning for healthcare, biomedical signal processing, wearable sensing, embedded and IoT systems, or AR for assistive education are welcome to get in touch. Please email a short note describing your interests, your relevant coursework or projects, and a CV."
  },
  "contact": {
    "lines": [
      "Department of Electrical and Electronic Engineering",
      "Southeast University",
      "Dhaka, Bangladesh"
    ],
    "office": "[Information to be added]",
    "hours": "[Information to be added]"
  },
  "footerAreas": "Machine learning • Biomedical signal processing • Wearable sensing • Healthcare technology • Embedded and IoT systems • AR for assistive education",
  "publications": [
    {
      "type": "journal",
      "year": 2026,
      "selected": true,
      "authors": "M. Jobayer, M. M. H. Shawon, M. Rasheduzzaman, M. W. Rahman, and **A. B. M. S. U. Doulah**",
      "title": "Progressive semi-supervised learning for multimodal pneumonia diagnosis",
      "venue": "Biomedical Signal Processing and Control, vol. 118, art. 109750",
      "doi": "10.1016/j.bspc.2026.109750"
    },
    {
      "type": "journal",
      "year": 2026,
      "authors": "M. Rasheduzzaman, **A. B. M. S. U. Doulah**, and M. M. Hossain",
      "title": "Design, implementation and assessment of complex engineering problems for the undergraduate engineering programme",
      "venue": "Journal of Turkish Science Education, vol. 23, no. 1, pp. 109–132",
      "doi": "10.36681/tused.2026.006"
    },
    {
      "type": "journal",
      "year": 2024,
      "authors": "M. S. Rahman, S. Chowdhury, M. Rasheduzzaman, and **A. B. M. S. U. Doulah**",
      "title": "Artificial intelligence-based algorithms and healthcare applications of respiratory inductance plethysmography: A systematic review",
      "venue": "Algorithms, vol. 17, no. 6, art. 261"
    },
    {
      "type": "journal",
      "year": 2023,
      "selected": true,
      "authors": "**A. B. M. S. U. Doulah**, M. Rasheduzzaman, F. A. Arnob, F. Sarker, N. Roy, M. A. Ullah, and K. A. Mamun",
      "title": "Application of augmented reality interventions for children with autism spectrum disorder (ASD): A systematic review",
      "venue": "Computers, vol. 12, art. 215"
    },
    {
      "type": "journal",
      "year": 2022,
      "selected": true,
      "authors": "**A. Doulah**, T. Ghosh, D. Hossain, et al.",
      "title": "Energy intake estimation using a novel wearable sensor and food images in a laboratory (pseudo-free-living) meal setting: quantification and contribution of sources of error",
      "venue": "International Journal of Obesity, vol. 46, pp. 2050–2057"
    },
    {
      "type": "journal",
      "year": 2020,
      "selected": true,
      "authors": "**A. B. M. S. U. Doulah**, T. Ghosh, D. Hossain, M. H. Imtiaz, and E. Sazonov",
      "title": "‘Automatic Ingestion Monitor Version 2’ — A novel wearable device for automatic food intake detection and passive capture of food images",
      "venue": "IEEE Journal of Biomedical and Health Informatics"
    },
    {
      "type": "journal",
      "year": 2019,
      "authors": "**A. Doulah** and E. Sazonov",
      "title": "A systematic review of technology-driven methodologies for estimation of energy intake",
      "venue": "IEEE Access, vol. 7"
    },
    {
      "type": "journal",
      "year": 2019,
      "authors": "M. Farooq, **A. Doulah**, J. Parton, M. A. McCrory, J. A. Higgins, and E. Sazonov",
      "title": "Validation of sensor-based food intake detection by multicamera video observation in an unconstrained environment",
      "venue": "Nutrients, vol. 11, no. 3, art. 609"
    },
    {
      "type": "journal",
      "year": 2019,
      "selected": true,
      "authors": "X. Yang, **A. Doulah**, M. Farooq, J. Parton, M. A. McCrory, J. A. Higgins, and E. Sazonov",
      "title": "Statistical models for meal-level estimation of mass and energy intake using features derived from video observation and a chewing sensor",
      "venue": "Scientific Reports, vol. 9, art. 45"
    },
    {
      "type": "journal",
      "year": 2017,
      "authors": "**A. Doulah**, M. Farooq, X. Yang, J. Parton, M. A. McCrory, J. A. Higgins, and E. Sazonov",
      "title": "Meal microstructure characterization from sensor-based food intake detection",
      "venue": "Frontiers in Nutrition, vol. 4, art. 31"
    },
    {
      "type": "journal",
      "year": 2017,
      "authors": "**A. Doulah** and E. Sazonov",
      "title": "Clustering of food intake images into food and non-food categories",
      "venue": "Bioinformatics and Biomedical Engineering (IWBBIO 2017), Lecture Notes in Computer Science, vol. 10208, Springer, pp. 454–463"
    },
    {
      "type": "journal",
      "year": 2017,
      "authors": "**A. Doulah**, X. Shen, and E. Sazonov",
      "title": "Early detection of the initiation of sit-to-stand posture transitions using orthosis-mounted sensors",
      "venue": "Sensors, vol. 17, no. 12"
    },
    {
      "type": "journal",
      "year": 2016,
      "authors": "**A. Doulah**, X. Shen, and E. Sazonov",
      "title": "A method for early detection of the initiation of sit-to-stand posture transitions",
      "venue": "Physiological Measurement, vol. 37"
    },
    {
      "type": "journal",
      "year": 2014,
      "selected": true,
      "authors": "**A. Doulah**, S. A. Fattah, W. Zhu, and M. Ahmad",
      "title": "Wavelet domain feature extraction scheme based on dominant motor unit action potential of EMG signal for neuromuscular disease classification",
      "venue": "IEEE Transactions on Biomedical Circuits and Systems, vol. 8, no. 2"
    },
    {
      "type": "journal",
      "year": 2014,
      "authors": "**A. Doulah**, S. A. Fattah, W. Zhu, and M. Ahmad",
      "title": "DCT domain feature extraction scheme based on motor unit action potential of EMG signal for neuromuscular disease classification",
      "venue": "IET Healthcare Technology Letters, vol. 1, no. 1"
    },
    {
      "type": "journal",
      "year": 2012,
      "authors": "S. A. Fattah, **A. Doulah**, M. A. Jumana, and M. A. Iqbal",
      "title": "Evaluation of different time and frequency domain features of motor neuron and musculoskeletal diseases",
      "venue": "International Journal of Computer Applications, vol. 43, no. 23, pp. 34–40"
    },
    {
      "type": "journal",
      "year": 2012,
      "authors": "S. A. Fattah, M. A. Iqbal, M. A. Jumana, and **A. Doulah**",
      "title": "Identifying the motor neuron disease in EMG signal using time and frequency domain features with comparison",
      "venue": "Signal & Image Processing: An International Journal, vol. 3, no. 2, p. 99"
    },
    {
      "type": "conference",
      "year": 2025,
      "authors": "F. Rabby and **A. B. M. S. U. Doulah**",
      "title": "Preeclampsia prediction using machine learning with electronic medical records in low-resource settings",
      "venue": "2025 2nd Int. Conf. on Next-Generation Computing, IoT and Machine Learning (NCIM), Gazipur, Bangladesh, pp. 1–6",
      "doi": "10.1109/NCIM65934.2025.11160134"
    },
    {
      "type": "conference",
      "year": 2025,
      "authors": "F. Rabby, M. M. Rahman, R. Das, M. H. Hossain, and **A. B. M. S. U. Doulah**",
      "title": "A parameter-efficient deep learning model for preeclampsia prediction using diverse datasets in low-resource settings",
      "venue": "2025 Int. Conf. on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), Rangpur, Bangladesh, pp. 1–6",
      "doi": "10.1109/QPAIN66474.2025.11172026"
    },
    {
      "type": "conference",
      "year": 2024,
      "authors": "S. Chowdhury, **A. B. M. S. U. Doulah**, M. Rasheduzzaman, and T. S. Rafa",
      "title": "Pediatric pneumonia diagnosis: Integration of a self-assembled digital stethoscope with Raspberry Pi and 1D CNN model",
      "venue": "2024 Int. Conf. on Advances in Computing, Communication, Electrical, and Smart Systems (iCACCESS), Dhaka, Bangladesh"
    },
    {
      "type": "conference",
      "year": 2023,
      "authors": "M. Sakib, S. S. Pervez, and **A. B. M. S. U. Doulah**",
      "title": "Towards smart helmet for motorcyclists: automatic stress level detection using wearable accelerometer sensor system",
      "venue": "2023 Int. Conf. on Communication, Circuits, and Systems (IC3S), Bhubaneswar, India, pp. 1–6"
    },
    {
      "type": "conference",
      "year": 2023,
      "authors": "M. Rasheduzzaman, **A. B. M. S. U. Doulah**, R. K. Sadhukhan, and M. M. Hossain",
      "title": "Assessing the environmental consequences of ICEVs and BEVs in Dhaka city via vehicle fleet modeling and support vector regression",
      "venue": "Int. Conf. on Energy, Power, Environment, Control, and Computing (ICEPECC), Gujrat, Pakistan"
    },
    {
      "type": "conference",
      "year": 2022,
      "authors": "S. Chowdhury, **A. B. M. S. U. Doulah**, and M. Rasheduzzaman",
      "title": "Quality assessment of respiratory sounds extracted from self-assembled digital stethoscopes",
      "venue": "2022 Int. Conf. on Advancement in Electrical and Electronic Engineering (ICAEEE), pp. 1–6"
    },
    {
      "type": "conference",
      "year": 2021,
      "authors": "M. Y. Hossain and **A. B. M. S. U. Doulah**",
      "title": "A comparative study of motor imagery (MI) detection in electroencephalogram (EEG) signals using different classification algorithms",
      "venue": "2021 Int. Conf. on Automation, Control and Mechatronics for Industry 4.0 (ACMI), pp. 1–6"
    },
    {
      "type": "conference",
      "year": 2020,
      "authors": "M. Y. Hossain and **A. B. M. S. U. Doulah**",
      "title": "Detection of motor imagery (MI) event in electroencephalogram (EEG) signals using artificial intelligence technique",
      "venue": "2020 IEEE East-West Design & Test Symposium (EWDTS), pp. 1–6"
    },
    {
      "type": "conference",
      "year": 2018,
      "authors": "**A. Doulah**, X. Yang, J. Parton, J. Higgins, M. McCrory, and E. Sazonov",
      "title": "The importance of field experiments in testing of sensors for dietary assessment and eating behavior monitoring",
      "venue": "40th Annual Int. Conf. of the IEEE Engineering in Medicine and Biology Society (EMBC), Honolulu, HI"
    },
    {
      "type": "conference",
      "year": 2014,
      "authors": "**A. Doulah** and S. A. Fattah",
      "title": "Neuromuscular disease classification based on mel frequency cepstrum of motor unit action potential",
      "venue": "2014 Int. Conf. on Electrical Engineering and Information & Communication Technology, Dhaka, pp. 1–4"
    },
    {
      "type": "conference",
      "year": 2013,
      "authors": "S. A. Fattah, **A. Doulah**, M. A. Iqbal, C. Shahnaz, W. Zhu, and M. Ahmad",
      "title": "Identification of motor neuron disease using wavelet domain features extracted from EMG signal",
      "venue": "IEEE Int. Symp. on Circuits and Systems (ISCAS), Beijing, China"
    },
    {
      "type": "conference",
      "year": 2012,
      "authors": "**A. Doulah** and M. A. Iqbal",
      "title": "An approach to identify myopathy disease using different signal processing features with comparison",
      "venue": "IEEE Int. Conf. on Computer and Information Technology (ICCIT), Chittagong, Bangladesh"
    },
    {
      "type": "conference",
      "year": 2012,
      "authors": "**A. Doulah**, M. A. Iqbal, and M. A. Jumana",
      "title": "ALS disease detection in EMG using time-frequency method",
      "venue": "IEEE Int. Conf. on Informatics, Electronics & Vision (ICIEV), Bangladesh, pp. 648–651"
    },
    {
      "type": "conference",
      "year": 2012,
      "authors": "S. M. Yasir Malek, J. Rozario, and **A. Doulah**",
      "title": "An approach to improve PV performance: Incorporating Q-dot nanocrystals and double sun technology",
      "venue": "IEEE Int. Conf. on Informatics, Electronics & Vision (ICIEV), Bangladesh, pp. 618–621"
    },
    {
      "type": "conference",
      "year": 2011,
      "authors": "**A. B. M. Sayeed Ud Doulah** and S. Islam",
      "title": "Detection of various diseases by using formant track extraction and pitch contour analysis",
      "venue": "14th Int. Conf. on Computer and Information Technology (ICCIT), Dhaka, Bangladesh, pp. 366–369"
    },
    {
      "type": "abstract",
      "year": 2024,
      "authors": "M. A. McCrory, K. Siu, X. Yang, T. Ghosh, **A. Doulah**, et al.",
      "title": "Meal timing from self-report dietary assessment methods compared with that based on image time stamps captured by a wearable camera",
      "venue": "Current Developments in Nutrition, vol. 8"
    },
    {
      "type": "abstract",
      "year": 2022,
      "authors": "S. Liao, T. Ghosh, D. Hossain, **A. Doulah**, T. Marden, J. Higgins, E. Sazonov, and M. McCrory",
      "title": "Effect of gradually reduced portion size estimation training on portion size and daily energy intake estimation accuracy",
      "venue": "Current Developments in Nutrition, p. 773"
    },
    {
      "type": "abstract",
      "year": 2018,
      "authors": "E. Sazonov, **A. Doulah**, J. Parton, J. Higgins, and M. McCrory",
      "title": "Automatic Ingestion Monitor v2 (AIM-2): a device for detection of eating, passive capture of food images and energy intake estimation",
      "venue": "Workshop on Innovative Technologies for Dietary Intakes Measurements, Imperial College London"
    },
    {
      "type": "abstract",
      "year": 2018,
      "authors": "A. Mande, T. Marden, S. Jung, **A. Doulah**, M. A. McCrory, E. Sazonov, and J. Higgins",
      "title": "A simplified, less expensive method to estimate energy intake from food images",
      "venue": "Workshop on Innovative Technologies for Dietary Intakes Measurements, Imperial College London"
    },
    {
      "type": "abstract",
      "year": 2018,
      "authors": "T. Marden, **A. Doulah**, M. A. McCrory, E. Sazonov, and J. Higgins",
      "title": "Extraneous foods and images on serveware cause overestimation of energy intake from food images",
      "venue": "Workshop on Innovative Technologies for Dietary Intakes Measurements, Imperial College London"
    },
    {
      "type": "abstract",
      "year": 2016,
      "authors": "M. Farooq, **A. Doulah**, X. Yang, J. Roopwattie, J. Parton, M. A. McCrory, J. A. Higgins, and E. Sazonov",
      "title": "Inter- and intra-rater reliability of video based annotation of eating episodes",
      "venue": "The Obesity Society"
    },
    {
      "type": "review",
      "year": 2025,
      "authors": "F. A. Arnob, **A. B. M. S. U. Doulah**, M. Rasheduzzaman, F. Sarker, M. A. Ullah, and K. A. Mamun",
      "title": "Improving literacy in children with autism spectrum disorder through augmented reality: A feasibility study",
      "venue": "Submitted to Journal of Autism and Developmental Disorders"
    },
    {
      "type": "review",
      "year": 2025,
      "authors": "F. A. Arnob, **A. B. M. S. U. Doulah**, M. Rasheduzzaman, F. Sarker, M. A. Ullah, and K. A. Mamun",
      "title": "Capturing and analyzing engagement of ASD children in activities using video frame extraction",
      "venue": "Submitted to e-Prime, Elsevier"
    },
    {
      "type": "review",
      "year": 2025,
      "authors": "F. Rabby and **A. B. M. S. U. Doulah**",
      "title": "LoRa-based emergency wearable system for elderly safety with secure mobile integration",
      "venue": "Submitted to IET Communications"
    }
  ]
};
