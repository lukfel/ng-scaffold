import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoConfig } from '../models';
import { Logger } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private metaTitle: Title,
              private metaTags: Meta,
              @Inject(DOCUMENT) private document: Document,
              private logger: Logger) { }

  public setMetaTags(seoConfig: SeoConfig): void {
    const title: string = seoConfig.metaPageTitle || '';
    const description: string = seoConfig.metaPageDescription || '';
    const imagePath: string = seoConfig.metaImagePath || '';
    const titleLimit: number = 60;
    const descriptionLimit: number = 160;

    // Set meta title
    if(title) {
      if(title.length > titleLimit) {
        this.logger.error(`SeoService: The set meta title is too long. Recommended length is ${titleLimit}. The title will be trimmed.`);
      }
      const titleTrim: string = (title.length > titleLimit) ? title.substring(0, titleLimit-3) + '...' : title;
      this._setMetaTitle(titleTrim);
    }

    // Set meta description
    if (description) {
      if(description.length > descriptionLimit) {
        this.logger.error(`SeoService: The set meta description is too long. Recommended length is ${descriptionLimit}. The description will be trimmed.`);
      }
      const descriptionTrim: string = (description.length > descriptionLimit) ? description.substring(0, descriptionLimit-3) + '...' : description;
      this._setMetaDescription(descriptionTrim);
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
    this.metaTags.updateTag({ property: 'og:title', content: title });
    this.metaTags.updateTag({ name: 'twitter:title', content: title });
  }

  // Set all meta descriptions
  private _setMetaDescription(description: string): void {
    this.metaTags.updateTag({ name: 'description', content: description });
    this.metaTags.updateTag({ property: 'og:description', content: description });
    this.metaTags.updateTag({ name: 'twitter:description', content: description });
  }

  // Set all meta images
  private _setMetaImage(image: string): void {
    this.metaTags.updateTag({ property: 'og:image', content: image });
    this.metaTags.updateTag({ name: 'twitter:image', content: image });
  }
}
