import React from "react";
import "./FundamentalRights.css";

export default function FundamentalRights() {
  const rights = [
    { title: "Right to Equality", desc: "Equal treatment of all before law." },
    { title: "Equality Before Law", desc: "No special privileges by the State." },
    { title: "No Discrimination", desc: "No discrimination on religion, race, caste, sex, birthplace." },
    { title: "Equality in Employment", desc: "Equal opportunity for employment." },
    { title: "Abolition of Untouchability", desc: "Forbidden in every form." },
    { title: "Abolition of Titles", desc: "No titles except academic & military." },
    { title: "Freedom of Speech", desc: "Express ideas freely within reasonable limits." },
    { title: "Freedom of Assembly", desc: "Form peaceful gatherings without arms." },
    { title: "Freedom of Association", desc: "Form unions and groups." },
    { title: "Freedom of Movement", desc: "Move freely anywhere in India." },
    { title: "Freedom of Residence", desc: "Live anywhere in India." },
    { title: "Freedom of Profession", desc: "Choose any lawful profession." },
    { title: "Protection Against Conviction", desc: "No double punishment for same offence." },
    { title: "No Self-Incrimination", desc: "Cannot be forced to testify against yourself." },
    { title: "Protection Against Retroactive Punishment", desc: "No punishment for actions done legally." },
    { title: "Right to Life", desc: "Right to a dignified life." },
    { title: "Right to Personal Liberty", desc: "Freedom from unlawful detention." },
    { title: "Right to Privacy", desc: "Recognized under Article 21." },
    { title: "Right to Education", desc: "Free education for ages 6–14." },
    { title: "Protection Against Arbitrary Arrest", desc: "Safeguards during arrest." },
    { title: "Right to be Informed of Charges", desc: "Must be told reason of arrest." },
    { title: "Right to a Lawyer", desc: "Legal representation during trial." },
    { title: "Right to be Produced before Magistrate", desc: "Within 24 hours of arrest." },
    { title: "Prohibition of Human Trafficking", desc: "No sale or exploitation of people." },
    { title: "Ban on Child Labour", desc: "Below 14 cannot work in hazardous industries." },
    { title: "Freedom of Religion", desc: "Practice and propagate any religion." },
    { title: "Manage Religious Institutions", desc: "Manage religious affairs independently." },
    { title: "No Religious Tax", desc: "No tax for promoting religion." },
    { title: "Ban on Religious Instruction in Govt Schools", desc: "No religious teaching in State-run schools." },
    { title: "Protection of Culture", desc: "Minorities may preserve their culture & language." },
    { title: "Right to Establish Educational Institutions", desc: "Minorities may run institutions of choice." },
    { title: "Right to Constitutional Remedies", desc: "Approach Supreme/High Court for rights enforcement." },
    { title: "Writ of Habeas Corpus", desc: "Protection against unlawful detention." },
    { title: "Writ of Mandamus", desc: "Order public authority to do its duty." },
    { title: "Writ of Prohibition", desc: "Stop lower court from exceeding jurisdiction." },
    { title: "Writ of Certiorari", desc: "Higher court reviews lower court decisions." },
    { title: "Writ of Quo Warranto", desc: "Challenge legality of holding public office." },
    { title: "Right to Environment", desc: "Healthy environment under Right to Life." },
    { title: "Right to Going Abroad", desc: "Part of personal liberty." },
    { title: "Right to Die with Dignity", desc: "Passive euthanasia allowed (2018)." }
  ];

  return (
    <div className="rights-page">
      <h2>Fundamental Rights of Indian Constitution</h2>
      <div className="rights-grid">
        {rights.map((r, idx) => (
          <div className="right-card" key={idx}>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
