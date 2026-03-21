export const GAME_NAME = "Be a Lucky Block";
export const SITE_NAME = "Be A Lucky Block Wiki";
export const SITE_DOMAIN = "bealuckyblockwiki.wiki";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || `https://${SITE_DOMAIN}`;

export const HERO_IMAGE_PATH = "/images/hero.webp";
export const HERO_IMAGE_URL = `${SITE_URL}${HERO_IMAGE_PATH}`;
export const HERO_IMAGE_ALT = "Be a Lucky Block hero artwork";
export const LAST_UPDATED = "March 21, 2026";

export const OFFICIAL_LINKS = {
  game: "https://www.roblox.com/games/124473577469410/Be-a-Lucky-Block",
  group: "https://www.roblox.com/communities/719390069",
  discord: "https://discord.com/invite/BWtJZhMaZJ",
  x: "https://x.com/xFrozenStudios",
  youtube: "https://www.youtube.com/watch?v=90yMVIeJI2k",
  updateEvent: "https://www.roblox.com/events/826422598903661200",
  liveEvent: "https://www.roblox.com/events/600083396198269515",
  recentEvent: "https://www.roblox.com/events/2576529648498377400",
} as const;

export const OFFICIAL_HANDLE = "@xFrozenStudios";

export const ORGANIZATION_SAME_AS = [
  OFFICIAL_LINKS.game,
  OFFICIAL_LINKS.group,
  OFFICIAL_LINKS.discord,
  OFFICIAL_LINKS.x,
  OFFICIAL_LINKS.youtube,
];

export const CONTACT_EMAILS = {
  general: `contact@${SITE_DOMAIN}`,
  support: `support@${SITE_DOMAIN}`,
  contribute: `contribute@${SITE_DOMAIN}`,
  partnerships: `partnerships@${SITE_DOMAIN}`,
  privacy: `privacy@${SITE_DOMAIN}`,
  legal: `legal@${SITE_DOMAIN}`,
  copyright: `copyright@${SITE_DOMAIN}`,
  dmca: `dmca@${SITE_DOMAIN}`,
} as const;
