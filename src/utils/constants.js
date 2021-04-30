// urls and routes

export const baseApiUrl = process.env.VUE_APP_BASE_API_URL;
export const usersUrl = `${baseApiUrl}users/`;
export const gainsUrl = `${usersUrl}gains/`;

// verbiage

export const navTitle = 'Woodcut';
export const searchPlaceholder = 'Username';
export const homeHeader = 'Woodcut';

// data

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

export const skillTableRangeOptions = [
    { text: 'Week', value: 'weekGain' },
    { text: 'Month', value: 'monthGain' },
    { text: 'Year', value: 'yearGain' },
]
