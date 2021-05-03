// urls and routes

export const baseApiUrl = process.env.VUE_APP_BASE_API_URL;
export const usersUrl = `${baseApiUrl}users/`;
export const gainsUrl = `${usersUrl}gains/`;

// verbiage

export const navTitle = 'Woodcut';
export const searchPlaceholder = 'Username';
export const homeHeader = 'Woodcut';

// data

export const statTableTabs = [
    { text: 'Skills'},
    { text: 'Minigames'},
]

export const skillTableHeaders = [
    {
        text: 'Skill',
        value: 'skillIcon',
    },
    { text: 'Xp', value: 'xp' },
    { text: 'Level', value: 'level' },
    { text: 'Rank', value: 'rank' },
    { text: 'Day', value: 'dayGain' },
]

export const minigameTableHeaders = [
    {
        text: 'Minigame',
        value: 'minigameName',
    },
    { text: 'Score', value: 'score' },
    { text: 'Rank', value: 'rank' },
    { text: 'Day', value: 'dayGain' },
]

export const skillTableRangeOptions = [
    { text: 'Week', value: 'weekGain', sortable: false, },
    { text: 'Month', value: 'monthGain', sortable: false, },
    { text: 'Year', value: 'yearGain', sortable: false, },
]
