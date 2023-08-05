import '@shelex/cypress-allure-plugin';
import './commands'
import { CommonpageMethods } from '../e2e/pages/common-page/common-page.methods';

beforeEach(()=>{
    CommonpageMethods.navigateToDemoBlaze()
})