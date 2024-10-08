/**
 * cron 0 0 * * *
 */
import axios from 'axios'

axios({
    url: 'https://wxclub-api.gentlemonster.com/api/sp-portal/store/nowhere/exclusiveActivity/findBookAbleDate?counterId=NW0000002&activityId=6614a22bcd8319df36a7a092&channel=fans'
}).then*(response => {
    console.log(response);
    
})
console.log('test');
