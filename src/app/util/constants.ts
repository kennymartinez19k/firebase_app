/* eslint-disable @typescript-eslint/naming-convention */

export const SAVED_CREDENTIAL = '$$Jabilla_Saved_Credential$$';
export const EMAIL_PATTERN = /^\w+([\.\--]?\w+)*@\w+(\-]?\w+)*(\.-]?\w+)*(\.\w{2,3})+$/i;
export const NUMBER_ONLY_PATTERN = /^\d+$/;
export const SPANISH_MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
export const LANGUAGE = '$$language$$';
export const ENVVARIABLE = '$$envVariable$$';
import { setVersion } from 'src/version';
import { environment, setUrl }  from '../../environments/settingUrl';

let hostname = window.location.hostname

setUrl('test')

setVersion('4.3')  // 04/11/22 

export const apiUrl = {
  
};

