import { test, expect } from '@playwright/test';
import * as path from 'path'; // Importez le module path pour gérer les chemins de fichiers

test('Mon test Playwright', async ({ page }) => {
  // Accédez à la page de paramètres du compte
  await page.goto('https://www.welcometothejungle.com/fr/signin');
  await page.getByText('Bienvenue !');

  // Remplir les champs "Email" et "Mot de passe"
  await page.getByTestId('login-field-email').click();
  await page.getByTestId('login-field-email').fill('inqom.qaautomationapplicant@gmail.com');
  await page.fill('input[name="password"]', 'o5N,d5ZR@R7^');

  // Cliquez sur le bouton "Se connecter"
  await page.getByTestId('login-button-submit').click();
  await page.getByLabel('Fermer sans accepter les cookies').click();

  await page.pause();

  await page.getByTestId('account-edit-field-avatar').getByRole('button').nth(1).click();



  await page.pause();
  // Cliquez sur le champ de téléchargement de fichier en utilisant l'attribut data-testid
  let fileInputLocator = page.locator('[data-testid="button.sc-gvZAcH.cLLWUP"]');
  //await fileInputLocator.click({ timeout: 10000 }); // Attendre que l'élément soit visible

  // Définissez le chemin local de la photo que vous souhaitez télécharge
  const filePath = '/Users/nina/playwright-example/tests/test-files/tassadit.png';
  await page.setInputFiles('[data-testid="account-edit-field-avatar"] input[type="file"]', filePath);
      

  await page.pause();

  await page.getByLabel('Je suis une femme').check();
  await page.getByTestId('account-edit-field-firstname').click();
  await page.getByTestId('account-edit-field-firstname').fill('Tassadit');
  await page.getByTestId('account-edit-field-lastname').click();
  await page.getByTestId('account-edit-field-lastname').fill('Abrous');
  await page.getByTestId('account-edit-field-phone').click();
  await page.getByTestId('account-edit-field-phone').fill('0768570983');
  await page.getByTestId('account-edit-field-birthdate').fill('20/11/1995');
  await page.getByTestId('account-edit-field-birthdate').press('Enter');

  await page.getByPlaceholder('Ville').click();
  await page.getByPlaceholder('Ville').fill('Paris');
  await page.getByRole('option', { name: 'Paris, Paris, Île-de-France, France' }).click();

  await page.pause();
  await page.getByRole('button', { name: 'Remove' }).click();
    // Cliquez sur le champ de téléchargement de fichier en utilisant l'attribut data-testid
  fileInputLocator = page.locator('[data-testid="account-edit-field-resume"]');
    //await fileInputLocator.click({ timeout: 10000 }); // Attendre que l'élément soit visible
      
      // Définissez le chemin local du fichier que vous souhaitez télécharger
  const cvfilePath = '/Users/nina/playwright-example/tests/test-files/CV.pdf';
      
      // Utilisez setInputFiles pour télécharger le fichier depuis votre système de fichiers local
  await fileInputLocator.setInputFiles(cvfilePath);
      
      // Attendez que le bouton "Soumettre" (Assurez-vous que l'élément avec le data-testid "account-edit-button-submit" existe) soit visible et cliquez dessus
  await page.waitForSelector('[data-testid="account-edit-button-submit"]');



  await page.pause();

  await page.getByTestId('account-edit-field-media[website]').click();
  await page.getByTestId('account-edit-field-media[website]').fill('https://playwright.dev/docs/intro');
  await page.getByTestId('account-edit-field-media[website]').press('Enter');
  await page.getByRole('group', { name: 'Ma présence sur internet' }).getByRole('combobox').locator('div').nth(1).click();
  await page.getByRole('option', { name: ' LinkedIn' }).click();
  await page.getByTestId('account-edit-field-media[linkedin]').click();
  await page.getByTestId('account-edit-field-media[linkedin]').fill('https://www.linkedin.com/in/tassadit-abrous-155726239/');



  await page.getByTestId('account-edit-button-submit').click();
  
  await page.pause();
  await page.getByTestId('header-user-links-toggle').click();
  await page.getByRole('menuitem', { name: ' Déconnexion' }).click();
  await page.pause();
});
