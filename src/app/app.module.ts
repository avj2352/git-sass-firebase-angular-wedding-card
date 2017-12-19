import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ChatComponent } from './components/chat/chat.component';
//Custom Service
import { MessageService } from './services/message.service';

export const firebaseConfig = {
  apiKey: "AIzaSyBWlxhagaaYlYHHidq7BSfuKnk2V19L3KE",
  authDomain: "test-chatapp-b17ea.firebaseapp.com",
  databaseURL: "https://test-chatapp-b17ea.firebaseio.com",
  projectId: "test-chatapp-b17ea",
  storageBucket: "",
  messagingSenderId: "223195150577"
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
