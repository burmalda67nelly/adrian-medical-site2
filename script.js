"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);

  function setText(id, value) {
    const element = $(id);
    if (!element) {
      console.error("Element not found:", id);
      return;
    }

    element.textContent = value;

    if (element.animate) {
      element.animate(
        [
          { opacity: 0.3, transform: "translateY(6px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        { duration: 300, easing: "ease-out" }
      );
    }
  }

  function randomItem(items, currentTitle) {
    const available = items.filter((item) => item.title !== currentTitle);
    const pool = available.length ? available : items;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  const diagnoses = [
    {
      title: "Chronic Main Character Syndrome",
      description: "The patient believes every room is an entrance scene. Prognosis: dramatically positive."
    },
    {
      title: "Advanced Sarcasm Disorder",
      description: "The patient communicates primarily through irony. Family members have developed partial immunity."
    },
    {
      title: "Acute Professional Overconfidence",
      description: "Confidence levels exceed available evidence. Further research is unlikely to change the patient's opinion."
    },
    {
      title: "Compulsive Right-ishness",
      description: "The patient is approximately 87% correct and 100% convinced of the remaining 13%."
    },
    {
      title: "Chronic Sleep Deficiency",
      description: "The patient is a medical student. This condition is expected to persist throughout the academic year."
    },
    {
      title: "Unexplained Coolness",
      description: "No known cause. No approved treatment. The patient refuses to cooperate with further investigation."
    },
    {
      title: "Acute Caffeine Dependency",
      description: "The patient insists coffee is a basic human right. The Ministry declines to comment."
    },
    {
      title: "Terminal Procrastination",
      description: "Tasks are repeatedly postponed until the situation becomes medically interesting."
    }
  ];

  const emergencies = [
    {
      title: "EMERGENCY № 001",
      description: "A patient says they Googled their symptoms. Remain calm. Close the browser. Begin a professional explanation."
    },
    {
      title: "EMERGENCY № 002",
      description: "Someone says, “I'm not feeling well.” No further information is available. Welcome to medicine."
    },
    {
      title: "EMERGENCY № 003",
      description: "The coffee machine has stopped working before an exam. All available personnel are advised to remain calm."
    },
    {
      title: "EMERGENCY № 004",
      description: "An exam has been announced for tomorrow. Immediate deployment of notes, coffee and emotional support is recommended."
    },
    {
      title: "EMERGENCY № 005",
      description: "The patient has diagnosed themselves using the internet. The diagnosis is confidence."
    }
  ];

  const appointments = [
    {
      title: "Minister of Good Decisions",
      description: "Appointment pending. The committee has received several concerns regarding the candidate's decision-making history."
    },
    {
      title: "Chief Medical Officer of Unofficial Coolness",
      description: "Maintains the national standard of looking unbothered during situations that concern everyone else."
    },
    {
      title: "Director of Patient Relations and Sarcasm",
      description: "Ensures all interactions remain memorable. Patient feedback is currently being reviewed."
    },
    {
      title: "Head of Department of Being Right-ish",
      description: "Investigates disagreements, issues conclusions and reserves the right to say 'I told you so'."
    },
    {
      title: "Supreme Consultant of Coffee-Based Medicine",description: "Specialises in caffeine, questionable sleep schedules and surviving another day of medical school."
    },
    {
      title: "Deputy Minister of Looking Busy",
      description: "Has mastered the art of carrying documents with a serious expression. Actual progress is classified."
    },
    {
      title: "Director of National Overthinking",
      description: "Reviews every possible outcome, including those that have no chance of happening."
    },
    {
      title: "Minister of Being Right-ish",
      description: "Authorised to be correct approximately 87% of the time, according to his own calculations."
    }
  ];

  const verdicts = [
    {
      title: "OFFICIALLY LEGENDARY",
      description: "The Ministry has reviewed the evidence and reluctantly confirms that Adrian is an excellent human being."
    },
    {
      title: "CERTIFIED NATIONAL TREASURE",
      description: "After a thorough investigation, the committee has decided that one birthday is not enough."
    },
    {
      title: "DISTINCTION IN BEING ADRIAN",
      description: "Outstanding performance in medicine, humour and making ordinary situations unnecessarily memorable."
    }
  ];

  function connectButton(id, callback) {
    const button = $(id);

    if (!button) {
      console.error("Button not found:", id);
      return;
    }

    button.addEventListener("click", callback);
  }

  connectButton("diagnosisBtn", () => {
    const item = randomItem(diagnoses, $("diagnosisTitle").textContent);
    setText("diagnosisTitle", item.title);
    setText("diagnosisDescription", item.description);
  });

  connectButton("emergencyBtn", () => {
    const item = randomItem(emergencies, $("emergencyTitle").textContent);
    setText("emergencyTitle", item.title);
    setText("emergencyDescription", item.description);
  });

  connectButton("careerBtn", () => {
    const item = randomItem(appointments, $("careerTitle").textContent);
    setText("careerTitle", item.title);
    setText("careerDescription", item.description);
  });

  connectButton("finalBtn", () => {
    const item = randomItem(verdicts, $("finalTitle").textContent);
    setText("finalTitle", item.title);
    setText("finalDescription", item.description);

    const result = $("finalResult");
    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });

    launchConfetti();
  });

  const dialog = $("secretDialog");

  connectButton("topSecretBtn", () => {
    if (dialog && typeof dialog.showModal === "function") {
      dialog.showModal();
    }
  });

  connectButton("closeDialogBtn", () => {
    if (dialog && typeof dialog.close === "function") {
      dialog.close();
    }
  });

  if (dialog) {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  }

  $("year").textContent = new Date().getFullYear();

  function launchConfetti() {
    const colors = ["#d7ff64", "#f2efdf", "#c84d40", "#7caa87"];

    for (let i = 0; i < 85; i++) {
      const piece = document.createElement("span");

      Object.assign(piece.style, {
        position: "fixed",
        top: "-16px",
        left: `${Math.random() * 100}vw`,
        width: `${5 + Math.random() * 7}px`,
        height: `${8 + Math.random() * 8}px`,
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        borderRadius: Math.random() > 0.5 ? "50%" : "2px",
        zIndex: "99999",
        pointerEvents: "none"
      });

      document.body.appendChild(piece);

      const animation = piece.animate(
        [
          { transform: "translateY(0) rotate(0)", opacity: 1 },
          {
            transform: `translate(${(Math.random() - 0.5) * 240}px, 110vh) rotate(${Math.random() * 900}deg)`,
            opacity: 0.15
          }
        ],
        { duration: 2200 + Math.random() * 1500, easing: "ease-out" }
      );

      animation.onfinish = () => piece.remove();
    }
  }console.log("M.O.H. loaded successfully. Buttons are ready.");
});