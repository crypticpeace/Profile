import React from 'react';
import { Instagram, Star, TrendingUp, Users, Eye, CheckCircle2, ExternalLink } from 'lucide-react';
import natureday from '../assets/nd_logo_transparent.png';
import maxus from '../assets/maxus_logo.png';
import walyas from '../assets/walyas_logo_gs.png';
import vit from '../assets/vit n rich logo_03.png';
import tspark from '../assets/mech_tshirt.png';
import ted from '../assets/TED Grid 2.png';
import sojourn from '../assets/sojourn_brochure_final.png';
import zephyr from '../assets/banner.png';

const PreviousClientWork = () => {
  const clientWorks = [
    {
      client: "VitnRich",
      date: "Feb 2024",
      brandLogo: vit,
      description: "Vitnrich, an organic and sugar-free chocolate company, created engaging reels and professional posts. ",
      details: [
        "Engaging graphic posts",
        "Created entertaining and creative reels",
        "Influencer collaboration marketing",
        "Event based marketing"
      ],
      results: {
        highlights: [
          {
            metric: "32%",
            label: "Engagement Rate",
            subtext: "Industry average is 18%",
            trend: "+52%",
            icon: TrendingUp
          },
          {
            metric: "12k+",
            label: "New Followers",
            subtext: "Campaign driven",
            trend: "+44%",
            icon: Users
          },
          {
            metric: "30k+",
            label: "Accounts Reached",
            subtext: "Campaign period",
            trend: "+200%",
            icon: Eye
          }
        ],
        keyMetrics: [
          "Gained 12k+ organic followers",
          "Collaborated with many creators",
          "Sales attributed to Instagram increased by 40%",
          "Website traffic from Instagram rose by 80%"
        ],
        projectCompletion: "100% of deliverables met",
        clientSatisfaction: 5
      },
      instaUrl: "https://www.instagram.com/vitnrich/",
      rating: 5
    },


    {
      client: "Maxus Cakes",
      brandLogo: maxus,
      date: "August 2023",
      description: " Maxus Cakes, a bakery in Mahavir Nagar, benefited from our social media content creation, influencer marketing, and ad campaigns. ",
      details: [
        "Engaging graphic posts",
        "Created entertaining and creative reels",
        "Influencer collaboration management",
        "Campaign performance tracking"
      ],
      results: {
        highlights: [
          {
            metric: "71%",
            label: "Engagement Rate",
            subtext: "Industry average is 18%",
            trend: "+32%",
            icon: TrendingUp
          },
          {
            metric: "800+",
            label: "New Followers",
            subtext: "Campaign driven",
            trend: "+180%",
            icon: Users
          },
          {
            metric: "50k+",
            label: "Accounts Reached",
            subtext: "Campaign period",
            trend: "+400%",
            icon: Eye
          }
        ],
        keyMetrics: [
          "Gained 800+ organic followers",
          "Influencer campaign ROI of 250%",
          "Sales attributed to Instagram increased by 180%"
        ],
        projectCompletion: "100% of deliverables met",
        clientSatisfaction: 5
      },
      instaUrl: "https://www.instagram.com/maxus_cakes/",
      rating: 5
    },

    {
      client: "Walyas Goti Soda",
      date: "October 2022",
      brandLogo: walyas,
      description: "For Walyas Goti Soda, a soda company, I managed social media, sales, and offline marketing, driving a significant increase in overall sales.",
      details: [
        "Engaging graphic posts",
        "Created entertaining and creative reels",
        "Offline marketing by various campaigns",
        "Paid marketing"
      ],
      results: {
        highlights: [
          {
            metric: "71%",
            label: "Engagement Rate",
            subtext: "Industry average is 18%",
            trend: "+21%",
            icon: TrendingUp
          },
          {
            metric: "300+",
            label: "New Followers",
            subtext: "Campaign driven",
            trend: "+120%",
            icon: Users
          },
          {
            metric: "1k+",
            label: "Accounts Reached",
            subtext: "Campaign period",
            trend: "+200%",
            icon: Eye
          }
        ],
        keyMetrics: [
          "Gained 400+ organic followers",
          "Focused more on offline marketing",
          "Sales attributed to Instagram increased by 60%"
        ],
        projectCompletion: "90% of deliverables met",
        clientSatisfaction: 4
      },
      instaUrl: "https://www.instagram.com/walyas.in/",
      rating: 4
    },

    {
      client: "Nature Day",
      date: "January 2023",
      brandLogo: natureday,
      description:
        "For the organic juice brand Nature Day, I implemented a complete social media revamp and crafted a tailored content strategy to drive offline sales.",

      details: [
        "Content creation for Instagram",
        "Social media strategy development",
        "Community management and engagement",
        "Monthly performance analysis"
      ],
      results: {
        highlights: [
          {
            metric: "19%",
            label: "Engagement Rate",
            subtext: "Industry average is 15%",
            trend: "+30%",
            icon: TrendingUp
          },
          {
            metric: "400+",
            label: "New Followers",
            subtext: "Organic growth",
            trend: "+125%",
            icon: Users
          },
          {
            metric: "4k+",
            label: "Accounts Reached",
            subtext: "Monthly average",
            trend: "+400%",
            icon: Eye
          }
        ],
        keyMetrics: [
          "Gained 400+ organic followers in 2 months",
          "Story views increased by 85%",
          "Website traffic from Instagram rose by 125%",
          "Offline sales boosted due to marketing efforts"
        ],
        projectCompletion: "100% of deliverables met",
        clientSatisfaction: 4
      },
      instaUrl: "https://www.instagram.com/lotmor_brands/",
      rating: 4
    }



  ];

  const graphicDesignWorks = [
    {
      title: "TEDX2023 & TEDX2024",
      imageUrl: ted,
      description: "Complete visual identity and branding materials.",
      detailsUrl: "https://www.behance.net/gallery/216084853/Tedx-Graphics"
    },
    {
      title: "Zephyr 2023",
      imageUrl: zephyr,
      description: "Eye-catching designs for promotional use.",
      detailsUrl: "https://www.behance.net/gallery/216085233/Zephyr"
    },

    {
      title: "Sojourn 2023",
      imageUrl: sojourn,
      description: "Complete visual identity and branding materials.",
      detailsUrl: "https://www.behance.net/funleawitham"
    },

    {
      title: "Tspark 2023",
      imageUrl: tspark,
      description: "Jersey and Logo Designing",
      detailsUrl: "https://www.behance.net/gallery/216085097/Tshirt-Designs"
    }

  ];

  const technicalProjects = [
    {
      title: "Tedx Website",
      description: "Developed a website for TEDx that archives memories from past events, showcases the current team, features blogs, and much more.",
      detailsUrl: "https://www.tedxtcet.com/"
    },
    {
      title: "Iste Website",
      description: "Developed a website for ISTE that archives memories from past events, showcases the current team, features blogs, and much more.",
      detailsUrl: "https://iste.tcetmumbai.in/"
    },
    {
      title: "NatureDay Website",
     
      description: "Developed an eCommerce website for Nature Day, a soft drink company, to enhance their online presence and facilitate smooth transactions.",
      detailsUrl: "https://natureday.in/"
    },
    {
      title: "VitnRich Website",
      description: "Developed an eCommerce website for VitnRich, a chocolate company, to streamline their online sales and improve customer experience.",
      detailsUrl: "https://vitnrich.com/?srsltid=AfmBOooZ1GZON-_sAMw4RUOamm00mnont68kvvD6djrPQKzFH8wWncVF"
    },
  ];
  const figmaDesigns = [
    {
      title: "Solar",
      description: "Created using Figma for a solar company website.",
      figmaUrl: "https://www.figma.com/design/UAei1hRiPdc3T32K2ffCmz/Solar?node-id=0-1&t=vJsVXkG3G5ty6hZ5-1",
    },
    {
      title: "EyeShine",
      description: "Mobile UI, app which helps blind people. ",
      figmaUrl: "https://www.figma.com/design/Ao6PRjCWVQb3vht3Tg24zr/EyeShine?node-id=0-1&t=LeCMYHmroTuNOFX3-1",
    },
  ];
  const instaDesigns = [
    {
      title: "TEDxTCET",
      description: "Creative post designed for Instagram.",
      instaUrl: "https://www.instagram.com/tedxtcet/?hl=en",
    },
    {
      title: "TCET ISTE",
      description: "Engaging Instagram content for event promotions.",
      instaUrl: "https://www.instagram.com/iste_tcet/?hl=en",
    },
  ];


  return (
    <div className="w-full p-2 border-b border-slate-700">
      <h2 className="text-2xl font-bold mb-2 mt-2 text-blue-300 animate-fade-in">Client work</h2>
      <div className="rounded-lg bg-slate-800 border border-slate-700">
        {/* Header */}
        <div className="border-b border-slate-700 p-4">
          <h2 className="text-xl font-medium text-gray-100 hover:text-blue-300 transition-colors duration-300">
            Previous Client Work
          </h2>
          <p className="text-sm text-gray-400 mt-1 hover:text-gray-300 transition-colors duration-300">
            Verified client projects and results
          </p>
        </div>

        {/* Client Work List */}
        <div className="divide-y divide-slate-700">
          {clientWorks.map((work, index) => (
            <div key={index} className="p-6 hover:bg-slate-800/70 transition-colors duration-300">
              {/* Header Section */}
              <div className="flex justify-between items-start mb-3">
                <div className="w-16 h-16 rounded-lg border border-slate-600 bg-slate-700 overflow-hidden flex-shrink-0 hover:border-blue-400 transition-colors duration-300">
                  {work.brandLogo ? (
                    <img
                      src={work.brandLogo}
                      alt={`${work.client} logo`}
                      className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <Instagram size={24} className="hover:text-blue-300 transition-colors duration-300" />
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center items-center group">
                  <h3 className="text-lg font-medium text-gray-100 group-hover:text-blue-300 transition-colors duration-300">
                    {work.client}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {work.date}
                  </p>
                </div>
                <a
                  href={work.instaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-300 hover:translate-x-1"
                >
                  <Instagram size={18} />
                  <span className="text-sm">View Profile</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Verification Badge */}
              <div className="flex items-center gap-2 mb-4 bg-blue-900/30 text-blue-300 px-3 py-2 rounded-md w-fit hover:bg-blue-900/40 transition-colors duration-300">
                <CheckCircle2 size={16} className="animate-pulse" />
                <span className="text-sm font-medium">Verified Client</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 hover:text-gray-100 transition-colors duration-300">
                {work.description}
              </p>

              {/* Results Section */}
              <div className="bg-slate-900/50 rounded-lg p-6 mb-4 hover:bg-slate-900/60 transition-colors duration-300">
                <h4 className="text-lg font-medium text-gray-100 mb-4 hover:text-blue-300 transition-colors duration-300">
                  Results Achieved
                </h4>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {work.results.highlights.map((highlight, i) => (
                    <div key={i} className="bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-blue-400/30 transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start justify-between">
                        <highlight.icon className="text-blue-400" size={20} />
                        <span className="text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors duration-300">
                          {highlight.trend}
                        </span>
                      </div>
                      <div className="mt-2">
                        <div className="text-2xl font-bold text-gray-100 hover:text-blue-300 transition-colors duration-300">
                          {highlight.metric}
                        </div>
                        <div className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors duration-300">
                          {highlight.label}
                        </div>
                        <div className="text-xs text-gray-400 mt-1 hover:text-gray-300 transition-colors duration-300">
                          {highlight.subtext}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Metrics */}
                <div className="bg-slate-800 rounded-lg border border-slate-700 p-4 hover:border-blue-400/30 transition-colors duration-300">
                  <h5 className="text-sm font-medium text-gray-100 mb-3 hover:text-blue-300 transition-colors duration-300">
                    Achievements
                  </h5>
                  <ul className="space-y-2">
                    {work.results.keyMetrics.map((metric, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300 hover:text-gray-100 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Client Satisfaction */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-700 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors duration-300">
                      Client Satisfaction
                    </span>
                    <div className="flex gap-1">
                      {[...Array(work.results.clientSatisfaction)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className="text-blue-400 fill-blue-400 hover:text-blue-300 hover:fill-blue-300 transition-colors duration-300" 
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-emerald-400 font-medium hover:text-emerald-300 transition-colors duration-300">
                    {work.results.projectCompletion}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Graphic Design Section */}
        <div className="border-t border-slate-700 p-4">
          <h2 className="text-xl font-medium text-gray-100">Graphic Design Work</h2>
          <p className="text-sm text-gray-400 mt-1">Visual branding and design projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {graphicDesignWorks.map((design, index) => (
              <div key={index} className="p-4 border border-slate-700 rounded-lg bg-slate-800">
                <img src={design.imageUrl} alt={design.title} className="w-full h-5/6 object-cover rounded-md mb-3" />
                <h3 className="text-lg font-medium text-gray-100">{design.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{design.description}</p>
                <a
                  href={design.detailsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex space-x-4 text-blue-400 hover:text-blue-300 text-sm"
                >
                  <ExternalLink size={14} className="ml-1 mt-1" />
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Figma Section */}
        <div className="border-t border-slate-700 p-4">
          <h2 className="text-xl font-medium text-gray-100">Figma Designs</h2>
          <p className="text-sm text-gray-400 mt-1">Designs created using Figma</p>
          <div className="flex space-x-4 mt-4">
            {figmaDesigns.map((design, index) => (
              <div key={index} className="p-4 border border-slate-700 rounded-lg bg-slate-800 w-1/2">
                <h3 className="text-lg font-medium text-gray-100">{design.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{design.description}</p>
                <a
                  href={design.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex space-x-4 text-blue-400 hover:text-blue-300 text-sm"
                >
                  <ExternalLink size={14} className="ml-1 mt-1" />
                  View Design on Figma
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Insta Section */}
        <div className="border-t border-slate-700 p-4">
          <h2 className="text-xl font-medium text-gray-100">Instagram Designs</h2>
          <p className="text-sm text-gray-400 mt-1">Instagram posts and content created</p>
          <div className="flex space-x-4 mt-4">
            {instaDesigns.map((design, index) => (
              <div key={index} className="p-4 border border-slate-700 rounded-lg bg-slate-800 w-1/2">
                <h3 className="text-lg font-medium text-gray-100">{design.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{design.description}</p>
                <a
                  href={design.instaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex space-x-4 text-blue-400 hover:text-blue-300 text-sm"
                >
                  <ExternalLink size={14} className="ml-1 mt-1" />
                  View on Instagram
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Projects Section */}
        <div className="border-t border-slate-700 p-4">
          <h2 className="text-xl font-medium text-gray-100">Technical Projects</h2>
          <p className="text-sm text-gray-400 mt-1">Software development and coding projects</p>
          <div className="space-y-4 mt-4">
            {technicalProjects.map((project, index) => (
              <div key={index} className="p-4 border border-slate-700 rounded-lg bg-slate-800">
                <h3 className="text-lg font-medium text-gray-100">{project.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{project.description}</p>
                <a
                  href={project.detailsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex text-blue-400 hover:text-blue-300 text-sm mt-3"
                >
                  <ExternalLink size={14} className="ml-1 mt-1" />
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousClientWork;
