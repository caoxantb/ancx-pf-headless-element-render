import {getDevice} from './get-device'
import {smoothScroll} from './smooth-scroll'

declare global {
  interface Window {
      pf_accordion_offset: any;
  }
}

export async function handleScrollToSection(e) {
  e.preventDefault();
  e.stopPropagation();
  const device = getDevice();
  const target = e.currentTarget as HTMLElement;
  const topOffset = JSON.parse(target.getAttribute("data-offset").replaceAll('&quot;', '"'));
  const customOffset = topOffset[device] ? parseInt(topOffset[device]) : 0;
  const pfSectionId = target.getAttribute("data-to-section");
  const otherOffset = window.pf_accordion_offset ? window.pf_accordion_offset : 0;
  if (pfSectionId) {
    // document.querySelector(`.${pfSectionId}`) will apply for old version
    const section =
      document.querySelector(`[data-section-id=${pfSectionId}]`) ||
      document.querySelector(`.${pfSectionId}`);
    const sectionOffsetTop = section.getBoundingClientRect().top;
    const offsetTopOfSection =
      sectionOffsetTop - document.body.getBoundingClientRect().top;
    smoothScroll(offsetTopOfSection - otherOffset - customOffset, 1000);
  }
}
