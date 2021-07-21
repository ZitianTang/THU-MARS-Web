const main = {
  title: 'Our Missions are Beyond Mars',

  // about_our_lab: migrated to THU-MARS-Web/about_our_lab.vue

  banner: [
    'banner1.jpg',
    'banner2.jpg',
    'banner3.jpg',
  ],

  overview_of_research_directions: [
    {
      title: 'Multimedia Computing',
      content: 'We train AI models that learn from multi-modal Internet data such as images, audios, videos and text.',
      image: 'multimedia.png'
    },
    {
      title: 'Autonomous Driving',
      content: 'We develop the next-generation autonomous driving software stack: perception, prediction and planning.',
      image: 'autonomous_vehicles.png'
    },
    {
      title: 'Robotics',
      content: 'We make robots that learn from multiple sensory inputs to interact with the environment.',
      image: 'robotics.png'
    },
    {
      title: 'Sensors',
      content: 'We devise novel sensors together with AI models to enable brand-new perception applications.',
      image: 'sensors.png'
    },
  ],

  about_our_leader: [
    'Dr. Hang Zhao (赵行) is an Assistant Professor at IIIS, Tsinghua University. His research interests include multi-modal machine learning, computer vision and autonomous driving.',
    'Dr. Zhao was a Research Scientist at Waymo (known as Google\'s self-driving project). Before that, he got his Ph.D. degree at MIT under Professor Antonio Torralba.'
  ],

  graduate_students: [
    {
      name: 'Chenzhuang Du 杜晨壮',
      website: '',
      content: 'Chenzhuang Du is a PhD student starting from 2020. He is interested in the fundamentals and applications of multi-modal learning.',
      image: 'chenzhuang.jpg',
    },
    {
      name: 'Wenxiao Wang 汪文潇',
      website: '',
      content: 'Wenxiao Wang is a MS student starting from 2020. He is interested in self-supervised learning.',
      image: 'kenan.jpeg',
    },
    {
      name: 'Yichen Liu 刘奕辰',
      website: '',
      content: 'Yichen Liu is a MS student starting from 2020. He is interested in the fundamentals and applications of multi-modal learning.',
      image: 'kenan.jpeg',
    },
    {
      name: 'Junru Gu 辜俊儒',
      website: 'https://github.com/GentleSmile',
      content: 'Junru Gu is a fourth year undergraduate student at Tsinghua University, and an incoming PhD student in the fall of 2021.',
      image: 'gujunru.png',
    },
    {
      name: 'Chenxu Hu 胡晨旭',
      website: '',
      content: 'Chenxu Hu is a fourth year undergraduate student at Zhejiang University, and an incoming PhD student in the fall of 2021.',
      image: 'chenxu.jpg',
    },
  ],

  research_assistants: [
    {
      name: 'Zihui Xue 薛子慧',
      website: '',
      content: 'Zihui Xue is a research assistant in the lab. She is interested in the fundamentals and applications of multi-modal learning.',
      image: 'kenan.jpeg',
    },
    {
      name: 'Tingle Li 黎庭乐',
      website: 'https://tinglok.netlify.app/',
      content: 'Tingle Li is a research assistant in the lab. He is interested in audio-visual learning.',
      image: 'tingle.jpg',
    },
    {
      name: 'Tianyu Hua 华天羽',
      website: 'https://patrickhua.github.io/',
      content: 'Tianyu Hua is a research assistant in the lab. He is interested in representation learning.',
      image: 'tianyu.jpg',
    },
    {
      name: 'Ziwen Zhuang 庄子文',
      website: '',
      content: 'Ziwen Zhuang is a research assistant in the lab. He is interested in robotics.',
      image: 'kenan.jpeg',
    },
    {
      name: 'Tianyuan Zhang 张天远',
      website: 'http://tianyuanzhang.com/',
      content: 'Tianyuan Zhang is a research assistant in the lab. He is interested in computer vision and autonomous driving.',
      image: 'tianyuan.jpg',
    },
  ],

  projects: [
    {
      title: 'HDMapNet: An Online HD Map Construction and Evaluation Framework',
      publisher: 'CVPR Workshop (best paper nominee)',
      authors: 'Qi Li, Yue Wang, Yilun Wang, Hang Zhao',
      description: '"HD map sensing from onboard sensors!"',
      paper_link: 'https://arxiv.org/abs/2107.06307',
      project_link: 'https://tsinghua-mars-lab.github.io/HDMapNet/',
      image: 'hdmapnet_demo.gif',
    },
    {
      title: 'On Feature Decorrelation in Self-Supervised Learning',
      publisher: 'arXiv',
      authors: 'Tianyu Hua, Wenxiao Wang, Zihui Xue, Yue Wang, Sucheng Ren, Hang Zhao',
      description: '"It reveals the connection between dimensional collapse and strong correlations"',
      paper_link: 'https://arxiv.org/abs/2105.00470',
      project_link: 'https://tsinghua-mars-lab.github.io/decorr/',
      image: 'decorrelation.jpg',
    },
    {
      title: 'TNT: Target-driveN Trajectory Prediction',
      publisher: 'CoRL 2020',
      authors: 'Hang Zhao*, Jiyang Gao*, Tian Lan, Chen Sun, Benjamin Sapp, Balakrishnan Varadarajan, Yue Shen, Yi Shen, Yuning Chai, Cordelia Schmid, Congcong Li, Dragomir Anguelov',
      description: '"A new SOTA multi-trajectory prediction model."',
      paper_link: 'https://arxiv.org/abs/2008.08294',
      project_link: '',
      image: 'tnt.png',
    },
    {
      title: 'VectorNet: Encoding HD Maps and Agent Dynamics from Vectorized Representation',
      publisher: 'CVPR 2020',
      authors: 'Jiyang Gao, Chen Sun, Hang Zhao, Yi Shen, Dragomir Anguelov, Congcong Li, Cordelia Schmid',
      description: '"A graphical representation of HD maps."',
      paper_link: 'https://openaccess.thecvf.com/content_CVPR_2020/papers/Gao_VectorNet_Encoding_HD_Maps_and_Agent_Dynamics_From_Vectorized_Representation_CVPR_2020_paper.pdf',
      project_link: 'https://blog.waymo.com/2020/05/vectornet.html',
      image: 'vectornet.gif',
    },
    {
      title: 'Scalability in Perception for Autonomous Driving: Waymo Open Dataset',
      publisher: 'CVPR 2020',
      authors: 'Pei Sun et al.',
      description: '"One of the largest and most diverse autonomous driving datasets ever released."',
      paper_link: 'https://arxiv.org/abs/1912.04838',
      project_link: 'https://waymo.com/open/',
      image: 'waymo_od_challenge.jpeg',
    },
    {
      title: 'The Sound of Motions',
      publisher: 'ICCV 2019',
      authors: 'Hang Zhao, Chuang Gan, Wei-Chiu Ma, Antonio Torralba',
      description: '"Listen to the sound of motions!"',
      paper_link: 'https://arxiv.org/abs/1904.05979',
      project_link: '',
      image: 'sound_of_motions.png',
    },
    {
      title: 'Self-supervised Moving Vehicle Tracking with Stereo Sound',
      publisher: 'ICCV 2019',
      authors: 'Chuang Gan, Hang Zhao, Peihao Chen, David Cox, Antonio Torralba',
      description: '',
      paper_link: 'http://openaccess.thecvf.com/content_ICCV_2019/html/Gan_Self-Supervised_Moving_Vehicle_Tracking_With_Stereo_Sound_ICCV_2019_paper.html',
      project_link: '',
      image: 'stereo_tracking.jpeg',
    }, 
    {
      title: 'Through-Wall Human Mesh Recovery Using Radio Signals',
      publisher: 'ICCV 2019',
      authors: 'Mingmin Zhao, Yingcheng Liu, Aniruddh Raghu, Hang Zhao, Tianhong Li, Antonio Torralba, Dina Katabi',
      description: '',
      paper_link: 'http://openaccess.thecvf.com/content_ICCV_2019/html/Zhao_Through-Wall_Human_Mesh_Recovery_Using_Radio_Signals_ICCV_2019_paper.html',
      project_link: '',
      image: 'rfavatar.gif',
    }, 
    {
      title: 'HACS: Human Action Clips and Segments Dataset for Recognition and Temporal Localization',
      publisher: 'ICCV 2019',
      authors: 'Hang Zhao, Zhicheng Yan, Lorenzo Torresani, Antonio Torralba',
      description: '"A large-scale dataset for temporal action localization and recognition."',
      paper_link: 'https://arxiv.org/abs/1712.09374',
      project_link: 'http://hacs.csail.mit.edu/',
      image: 'slac.jpeg',
    }, 
    {
      title: 'The Sound of Pixels ',
      publisher: 'ECCV 2018',
      authors: 'Hang Zhao, Chuang Gan, Andrew Rouditchenko, Carl Vondrick, Josh McDermott, Antonio Torralba',
      description: '"Listen to the sound of pixels!"',
      paper_link: 'https://arxiv.org/abs/1804.03160',
      project_link: 'http://sound-of-pixels.csail.mit.edu/',
      image: 'sound_of_pixels.png',
    }, 
  ],

  alumni: [],
}

export default main
