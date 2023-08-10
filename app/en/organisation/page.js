import React from 'react';

import './organisation.css';

const boardMembers = [
  {
    "name": "Mogens Hugo",
    "title": "Chairman",
    "qualifications": ["MSc in Political Science, MBA"],
    "joinedBoard": "29/10/2001",
    "born": "1943",
    "lastElected": "2022",
    "termExpiry": "2024",
    "specialSkills": "Operational and strategic management, publicly-listed international corporations, strategy development, finance, investment, risk management, extensive board experience in industrial and financial companies, and foundations",
    "otherPositions": "Chairman of the board in Dan Technologies A/S, Capidea Management A/S, Teater Mungo Park – Allerød, Teater Mungo Park – Kolding, Vice-Chairman in Institutionen Dr. Dante – Mungo Board member in the Property Østre Gasværk (foundation), Director in Hugo Invest II ApS"
  },
  {
    "name": "Finn Junge-Jensen",
    "qualifications": ["MBA, former rector at CBS"],
    "joinedBoard": "29/10/2001",
    "born": "1944",
    "lastElected": "2021",
    "termExpiry": "2023",
    "specialSkills": "Strategy and management, extensive board experience from private companies, public institutions, and foundations",
    "otherPositions": "Member of the boards: Politiken-Fonden, Boligfonden for internationale studerende og gæsteforskere ved Handelshøjskolen i København, Vedbygaard Rekonvalescenthjem, A/S Politiken Holding, Fonden Tietgenkollegiet, Diakonissestiftelsen, Klitgården Fond, Ordrupgaard, advisory board member"
  },
  {
    "name": "Per Holten-Andersen",
    "qualifications": ["Cand. Silv., HD, PhD", "Rector for Den Kgl. Veterinær og Landbohøjskole (KVL) 2002-2006", "Rector for CBS 2012-2019"],
    "joinedBoard": "24/10/2019",
    "born": "1952",
    "lastElected": "2022",
    "termExpiry": "2024",
    "specialSkills": "University leadership, student collaboration, board experience from public institutions, and foundations",
    "otherPositions": "Institute Director, dean and rector at KU. As rector chairman for countless Foundations (SonningFonden, KU’s Almene Fond, Den Arnamagneanske Samling., etc.). Chairman of Virum Gymnasium until 2015. Member of Egmont college's board until 2015"
  },
  {
    "name": "Birgitte Høier",
    "qualifications": ["Dr. PhD, Assistant Professor", "Institute for Sports and Nutrition,", "University of Copenhagen"],
    "joinedBoard": "12/4/2016",
    "born": "1970",
    "lastElected": "2022",
    "termExpiry": "2023",
    "specialSkills": "National and international research experience with a focus on the effect of physical exercise on the cardiovascular system in healthy young and old as well as in cardiovascular diseases, project management experience from human research projects, co-supervisor for bachelor, master and PhD students, insight into study conditions for university students at all levels",
    "otherPositions": "Deputy for Ph.D. students at the University of Copenhagen on the board of the Research Education Program in Sport Sciences (REPS), Denmark, 2010-2013. Co-founder and chairman of the board in newly established housing cooperative Nørrebrogade 190/Ægirsgade 1, Copenhagen N, Denmark, 2003-2006. Board member and chairman in the nursery, Rådmandsgade 1, Copenhagen N., kindergarten Ragnarok, Copenhagen Ø, and in Kollegiegården's nursery, Copenhagen N, 2001-2008."
  },
  {
    "name": "Jens Frydenvang",
    "qualifications": ["Ph.D., Cand.Scient.", "Assistant Professor at the University of Copenhagen"],
    "joinedBoard": "22/04/2020",
    "born": "1986",
    "lastElected": "2022",
    "termExpiry": "2024",
    "specialSkills": "Among the first residents who moved into Tietgenkollegiet and contributed broadly to the start-up of resident groups, including the College Council and as chairman of this for several years. Researcher at the University of Copenhagen with direct involvement in NASA’s Mars Science Laboratory and Mars 2020 missions exploring Mars with Curiosity and (from February 2021) Perseverance rovers. Extensive insight into Danish and international research and works directly with university students. Extensive experience in disseminating scientific results from our exploration of Mars to all age groups.",
    "otherPositions": "Long-term member of the board in Ejerforeningen Ved Sønderport 14-24. Co-founder of SpectraCrop Aps."
  }
]

const Organisation = () => {
  return (
    <div className="app__organisation" >
      <h1>Organisation</h1>

      <p className="app__organisation-desc">Tietgenkollegiet was built based on a donation from Nordea-fonden. Because of the size of the donation and the residence hall, it was decided to create an independent body, Fonden Tietgenkollegiet, to handle the construction and operation of the residence hall.</p>
      <p className="app__organisation-desc">The day-to-day administration and operation of Tietgenkollegiet is handled by the residence hall administration with an established residence hall council consisting of residents for sparring.</p>


      <h2 className="app__organisation-title">The Board</h2>

      <div className="app__organisation-board">

        {boardMembers.map((member, index) => (
          <div className={`app__organisation-board-item`}>
            <div className="app__organisation-board-item_bottom">
              <div className="app__organisation-board-item_bottom_left">
                <h2 className="board-name">{member.name} {member.title && <p className="whitetag">{member.title}</p>}</h2>
                <span className="rtag">
                {member.qualifications.map((qualification) => (
                  <p>{qualification}</p>
                ))} 
                <br/>
                <span className="bold">
                <p>Born: {member.born}</p>
                <p>Joined Board: {member.joinedBoard}</p>
                <p>Last Elected: {member.lastElected}</p>
                <p>Term Expiry: {member.termExpiry}</p>
                </span>
                </span>
              </div>
              
              <div className="app__organisation-board-item_bottom_right">
                <div className="app__organisation-board-item_bottom_right_top">
                  <h2>Special Skills</h2>
                  <p>{member.specialSkills}</p>
                </div>

                <div className="app__organisation-board-item_bottom_right_bottom">
                  <h2>Other Positions</h2>
                  <p>{member.otherPositions}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>


    </div>
  );
}

export default Organisation;
