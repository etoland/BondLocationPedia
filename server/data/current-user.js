const usernames = {
  craigcrazy: {
    handle: "craigcrazy",
    displayName: "Daniel Craig's Wide",
    avatarSrc: "/assets/craigcrazy.png",
    bannerSrc: "/assets/craigcrazybanner.png",
    location: "Wherever Daniel Craig currently is",
    joined: "2013-02-02T12:00",
    bio: "Always on the lookout for anything Daniel Craig related in London!! Hoping to meet him in 2022!! #keepaneyeoutforselener #notastalker",
    followingIds: ["bondbaddie"],
    followerIds: ["bondbaddie"],
    likeIds: ["1212689921057665024"],
  },
  bondbaddie: {
    handle: "bondbaddie",
    displayName: "Cynthia Bond",
    avatarSrc: "/assets/bondbaddie.png",
    bannerSrc: "/assets/bondbaddiebanner.png",
    location: "Shoreditch, London",
    joined: "2020-10-12T12:00",
    bio: "Just a girl working her way through Ian Fleming's London #watchoutforcraigcrazy #shesastalker",
    followingIds: ["craigcrazy"],
    followerIds: ["craigcrazy"],
    likeIds: ["1209791721099411456"],
  },
  agent007: {
    handle: "agent007",
    displayName: "The Real James Bond. Unofficial.",
    avatarSrc: "/assets/007agent.png",
    bannerSrc: "/assets/007agentbanner",
    location: undefined,
    joined: "2018-09-01T18:00",
    bio: "Currently on the run from Le Chiffre...",
    followingIds: ["craigcrazy", "bondbaddie"],
    followerIds: ["craigcrazy", "bondbaddie"],
    likeIds: [],
  },
};

const posts = {
  "1209791721099411456r1": {
    email: "etoland007@gmail.com",
    timestamp: "2021-10-19T09:14:00+00:00",
    sortedTimestamp: "2021-10-19T09:14:00+00:00",
    retweetOf: "1212689921057665024",
    likedBy: [],
    retweetedBy: [],
  },
  "1212689921057665024": {
    email: "emma.mandat-toland@mail.mcgill.ca",
    timestamp: "2021-12-12T09:14:00+00:00",
    sortedTimestamp: "2021-12-12T09:14:00+00:00",
    likedBy: [],
    retweetedBy: ["agent007"],
    status:
      "Going on a walk around central London tomorrow to try to find #theloveofmylife @danielcraig... who wants to join? #plzunblockme.",
    media: [
      {
        type: "img",
        url: "/assets/plzunblockme.png",
      },
    ],
  },
};
module.exports = {
  usernames,
  posts,
};
