import { Component } from '@angular/core';
import { SocialService } from "ngx-social-button";
import { SocialUser } from 'ngx-social-button/lib/entities';

@Component({
    selector: 'contact-me',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.scss']
})

export class ContactComponent {
    shareObj = {
        href: "https://www.facebook.com/events/382253666044449/384153202521162/?notif_t=admin_plan_mall_activity&notif_id=1570187233331651",
        hashtag: "ads"
    };
    constructor(private socialAuthService: SocialService) { }
    signOut() {
        if (this.socialAuthService.isSocialLoggedIn()) {
            this, this.socialAuthService.signOut().catch((err) => {

            })
        }

    }
    getSocialUser(socialUser) {
        console.log(socialUser)
    }
}