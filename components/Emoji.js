import React from 'react';
import twemoji from 'twemoji';

const Emoji = ({emoji, modifiers}) => {
    const parsedEmoji = twemoji.parse(emoji);
    return <p className={'select-none ' + modifiers} dangerouslySetInnerHTML={{__html: parsedEmoji}}/>
};

export default Emoji;
