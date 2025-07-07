
import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoConfig } from '../models';
import { Logger } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private metaTitle = inject(Title);
  private metaTags = inject(Meta);
  private document = inject<Document>(DOCUMENT);
  private logger = inject(Logger);


  /**
   * Pass a configuration to set meta tags such as title, description and image for search results and social media
   * 
   * @param seoConfig config that contains all the meta information
   * 
   */
  public setMetaTags(seoConfig: SeoConfig): void {
    const autoTrim: boolean = seoConfig.autoTrim || false;
    const title: string = seoConfig.metaPageTitle || '';
    const description: string = seoConfig.metaPageDescription || '';
    const imagePath: string = seoConfig.metaImagePath || '';
    const titleLimit: number = 60;
    const descriptionLimit: number = 160;

    // Set meta title
    if (title) {
      if (autoTrim && title.length > titleLimit) {
        this.logger.error(`[SeoService] The set meta title is too long. Recommended length is ${titleLimit}. The title will be trimmed.`);
      }
      const titleTrim: string = (title.length > titleLimit) ? title.substring(0, titleLimit - 3) + '...' : title;
      this._setMetaTitle(autoTrim ? titleTrim : title);
    }

    // Set meta description
    if (description) {
      if (autoTrim && description.length > descriptionLimit) {
        this.logger.error(`[SeoService] The set meta description is too long. Recommended length is ${descriptionLimit}. The description will be trimmed.`);
      }
      const descriptionTrim: string = (description.length > descriptionLimit) ? description.substring(0, descriptionLimit - 3) + '...' : description;
      this._setMetaDescription(autoTrim ? descriptionTrim : description);
    }

    // Set meta image
    const host: string = this.document.location.origin;
    if (imagePath) {
      this._setMetaImage(`${host}/${imagePath}`);
    }
  }

  // Set all meta titles
  private _setMetaTitle(title: string): void {
    this.metaTitle.setTitle(title);
    this.metaTags.updateTag({ itemprop: 'name', content: title });
    this.metaTags.updateTag({ property: 'og:title', content: title });
    this.metaTags.updateTag({ name: 'twitter:title', content: title });
  }

  // Set all meta descriptions
  private _setMetaDescription(description: string): void {
    this.metaTags.updateTag({ name: 'description', content: description });
    this.metaTags.updateTag({ itemprop: 'description', content: description });
    this.metaTags.updateTag({ property: 'og:description', content: description });
    this.metaTags.updateTag({ name: 'twitter:description', content: description });
  }

  // Set all meta images
  private _setMetaImage(image: string): void {
    this.metaTags.updateTag({ itemprop: 'image', content: image });
    this.metaTags.updateTag({ property: 'og:image', content: image });
    this.metaTags.updateTag({ name: 'twitter:image', content: image });
  }
}
