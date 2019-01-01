import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import { setPassiveTouchGestures, setRootPath } from "../../node_modules/@polymer/polymer/lib/utils/settings.js";
import "../../node_modules/@polymer/app-layout/app-drawer/app-drawer.js";
import "../../node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js";
import "../../node_modules/@polymer/app-layout/app-header/app-header.js";
import "../../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js";
import "../../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js";
import "../../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js";
import "../../node_modules/@polymer/iron-image/iron-image.js";
import "../../node_modules/@polymer/iron-icon/iron-icon.js";
import "../../node_modules/@polymer/paper-card/paper-card.js";
import "../../node_modules/@polymer/paper-button/paper-button.js";
import "../../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import './northtable-icons.js';
/**
 * @customElement
 * @polymer
 */

class NorthtableApp extends PolymerElement {
  static get template() {
    return html`
      

      <style>
      
        :host {
          display: block;

        }
        
        #head{
          font-family: 'Indie Flower', cursive;
          font-weight: lighter;
          font-size: 70px;
        }
        
        app-header {
        padding-top: 20px;
        padding-bottom: 20px;
        margin-bottom: 50px;
        --app-header-shadow: {
        box-shadow: inset 0px 5px 2px -3px rgba(0, 0, 0, 0.2);
        };

        }
        app-header:hover{
        box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2);

        }

        iron-icon.giant {
        width: 140px;
        height: 120px;
        }
        .cardheading{
          font-size: 40px;
          font-weight: lighter;
        }
        paper-card{
          text-align: center;
          padding-right: 7%;
          padding-left: 7%;
          margin-bottom: 50px;
          font-weight: bold;
          opacity: 0.9;
          text-transform: uppercase;
          
        }
        paper-card:hover {
        box-shadow: 0 10px 15px 0 rgba(0,0,100,0.2);
        border-width: 1px;
        border-color: blue;
        opacity: 1;
        }

        .content{
          text-align: center;
          background-image: url(/images/background.png);
          background-position: center; 
          background-repeat: no-repeat;
          background-size: contain; 
        }

        .list{
  
          list-style:none;  
          text-align: justify;
        }
        .list li{
          padding: 15px 30px 15px 30px;
        }
        .list li:hover{
          background-color: hsl(120, 6%, 94%);
          border-radius: 4px;
        }


    @media only screen and (max-width: 600px){
        #head{
        font-size: 39px;
        padding-right: 10px;
        }
        iron-icon.giant {
        padding-left: 0px;
        width: 110px;
        height: 110px;
        }

        }
      </style>
   
 
     <app-header slot="header" fixed effects="waterfall">
            <app-toolbar >
              <iron-icon src="images/logomom.png" class="giant"></iron-icon>
              <div main-title="" id="head" >[[prop1]]</div>
            </app-toolbar>
          </app-header>




<div class="content">
<paper-card>
<div class="cardheading">MENU</div>
      <div class="card-content">
              <ul class="list">
              <li>belmi kachori with sabji</li>
              <li>pao bhaji</li>
              <li>samosa - potato, vegetable</li>
              <li>dahi vada</li>
              <li>ras malai</li>
              <li>panner items</li>
              <li>main course items all veg(thali)</li>
              <li>kulfi - santra kulfi etc</li>
              <li>chana, puri</li>
              <li>pani puri </li>
              <li>bhel puri (chat items)</li>
              </ul>
      </div>
      <div class="card-actions">
        <paper-button>Share</paper-button>
        <paper-button>Explore!</paper-button>
      </div>
    </paper-card>


<div>





    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'North Table'
      }
    };
  }

}

window.customElements.define('northtable-app', NorthtableApp);