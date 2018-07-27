import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RestService} from '../../services/rest.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    lf: FormGroup = this.fb.group({
        'user': ['', Validators.required],
    });

    pf: FormGroup = this.fb.group({
        'verifyCode': ['', Validators.required]
    });

    vf: FormGroup = this.fb.group({
        'password': ['', Validators.required],
    });

    constructor(private navCtrl: NavController, private params: NavController, private fb: FormBuilder, private rest: RestService) {
    }

    ngOnInit() {
    }

    doLocking() {
        if (this.lf.valid) {
            this.rest.userLocking(this.lf.value).subscribe((data) => {

            });
        }
    }

    private isPhone(value: string): boolean {
        return true;
    }
}
