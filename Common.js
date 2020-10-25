mw.loader.load('https://apis.google.com/js/platform.js');

if (wgPageName === 'Special:Upload' || wgPageName === 'Special:MultipleUpload') {
    $('#wpUploadDescription').val('[[Category:Images]]');
}

// change label
$('.pi-data-label:contains("Username")').replaceWith('<h3 class="pi-data-label pi-secondary-font">Subscribers</h3>');

window.UserTagsJS = {
    modules: {},
    tags: {
        bureaucrat: { link: 'Project:Administration#Bureaucrats and Administrators' },
        sysop: { link: 'Project:Administration#Bureaucrats and Administrators' },
        rollback: { link: 'Project:Administration#Rollbacks and Chat Moderators' },
        chatmoderator: { link: 'Project:Administration#Rollbacks and Chat Moderators' }
    }
};
UserTagsJS.modules.inactive = 30;
UserTagsJS.modules.mwGroups = ['bureaucrat', 'sysop', 'rollback', 'chatmoderator', 'bot'];
UserTagsJS.modules.metafilter = { 'notautoconfirmed': ['newuser'] };
UserTagsJS.modules.newuser = { days: 5, edits: 0 };

window.UserTagsJS = {
    modules: {},
    tags: {
        discordfounder: { u: 'Discord Founder' },
        discordadmin: { u: 'Discord Admin' },
        discordmod: { u: 'Discord Moderator' },
        verifiedyt: { u: 'Verified YouTuber' },
        rollback: { u: 'Rollbacker' },
        retired: { u: 'Retired Staff' }
    }
};

window.lastEdited = {
    position: 'bottom',
    size: false,
    comment: false,
    time: true
};

window.railWAM = {
    logPage: 'Project:WAM Log'
};

/*
 * UserTags configuration
 * Reads data from [[MediaWiki:Custom-UserTags.json]]
 * This is just so we don't need to bother with waiting
 * for JSRT with every new update to the usergroups.
 
 * @author Sidemen19
 * @credits [[w:c:dev:MediaWiki:I18n-js/code.js]]
 */

(function ($, mw) {
    function loadHighlights() {
        var deferred = $.Deferred(),
            apiEndpoint = 'https://youtube.fandom.com/api.php',
            page = 'MediaWiki:Custom-UserTags.json',
            params;

        params = {
            action: 'query',
            format: 'json',
            prop: 'revisions',
            rvprop: 'content',
            titles: page,
            indexpageids: 1
        };

        mw.loader.using(['mediawiki.util'], function () {
            $.ajax(apiEndpoint, {
                data: params,
                dataType: 'jsonp'
            }).always(function (data) {
                var res = '',
                    revisionData = data.query && data.query.pages[data.query.pageids[0]].revisions;

                if (revisionData) {
                    res = revisionData[0]['*'];
                }

                deferred.resolve(parseMessagesToObject(res));
            });
        });

        return deferred;
    }

    function parseMessagesToObject(res) {
        var json = {};

        try {
            res = stripComments(res);
            json = JSON.parse(res);
        } catch (err) {}

        return json;
    }

    function stripComments(json) {
        json = json
            .trim()
            .replace(/\/\*[\s\S]*?\*\//g, '');

        return json;
    }

    loadHighlights().then(function (body) {
        UserTagsJS.modules.custom = body;
    });
})(jQuery, mediaWiki);
