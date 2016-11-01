import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { EmailSettings } from './email-settings';
import { NotificationsSettings } from './notifications-settings';
import { hasChannels } from '../utils/app';

export class SettingsComponent extends Component {

    static propTypes = {
        className: PropTypes.string
    };

    render() {
        const {settings} = this.context;
        const settingsComponent = hasChannels(settings) ? <NotificationsSettings /> : <EmailSettings />;

        return <div className='sk-settings'>
                   { settingsComponent }
               </div>;
    }
}

export const Settings = connect(({app}) => {
    return {
        settings: app.settings.web
    };
})(SettingsComponent);
