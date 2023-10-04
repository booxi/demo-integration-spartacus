import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://sap-io-paris.demo.hybris.com',
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      // baseSite: ['apparel-uk-spa'],
      // language: ['en', 'de'],
      // currency: ['GBP'],
      // urlParameters: ['baseSite', 'language', 'currency'],
    },
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '6.4'
    }
  })]
})
export class SpartacusConfigurationModule { }
