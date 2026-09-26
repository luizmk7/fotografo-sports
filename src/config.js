// Configure o contato aqui, com DDI e DDD, somente dígitos.
export const siteConfig = { whatsappNumber: '' };
window.SITE_CONFIG = siteConfig;
if (siteConfig.whatsappNumber) {
 document.querySelector('#contact-form button').firstChild.textContent = 'Continuar no WhatsApp ';
}
