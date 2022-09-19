/**
   Just a copy version from pfcore
   TODO: write api to dynamic load css data from PageFly
 */

export const mainCss = `.__pf img, .__pf video {
    max-width: 100%;
    border: 0;
    vertical-align: middle;
}
.__pf *, .__pf *:before, .__pf *:after {
    box-sizing: border-box;
}
.__pf [disabled], .__pf [readonly] {
    cursor: default;
}
.__pf [data-href],
.__pf button:not([data-pf-id]):hover {
    cursor: pointer;
}
.__pf [disabled] {
    pointer-events: none;
}
.__pf [hidden] {
    display: none !important;
}
.__pf [data-link="inherit"] {
    color: inherit;
    text-decoration: none;
}
.__pf [data-pf-placeholder] {
    outline: none;
    height: auto;
    display: none;
    pointer-events: none !important;
}
.__pf [style*="--cw"] {
    padding: 0 15px;
    width: 100%;
    margin: auto;
    max-width: var(--cw);
}
.__pf .pf-ifr {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
.__pf .pf-bg-lazy {
    background-image: none !important;
}
.__pf .pf-r {
    display: flex;
    flex-wrap: wrap;
}
.__pf .pf-r-dg {
    display: grid;
}
.__pf [style*="--c-xs"] {
    max-width: calc(100%/12*var(--c-xs));
    flex-basis: calc(100%/12*var(--c-xs));
}
.__pf [style*="--s-xs"] {
    margin: 0 calc(-1 * var(--s-xs));
}
.__pf [style*="--s-xs"] > .pf-c {
    padding: var(--s-xs);
}
.__pf .pf-r-ew > .pf-c {
    flex-grow: 1;
    flex-basis: 0;
}
.__pf [style*="--ew-xs"] > .pf-c {
    flex-basis: calc(100% / var(--ew-xs));
    max-width: calc(100% / var(--ew-xs));
}
.__pf [style*="--ratio"] {
    position: relative;
    padding-bottom: var(--ratio);
}
.__pf [style*="--ratio"] img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
.__pf .oh {
    overflow: hidden;
}
.main-content {
    padding: 0;
}
.site-footer, .site-footer-wrapper, .footer-section, main .accent-background+.shopify-section {
    margin: 0;
}
@media (max-width: 767px) {
    .__pf .pf-hide {
        display: none !important;
    }
}
@media (max-width: 1024px) and (min-width: 768px) {
    .__pf .pf-sm-hide {
        display: none !important;
    }
}
@media (max-width: 1199px) and (min-width: 1025px) {
    .__pf .pf-md-hide {
        display: none !important;
    }
}
@media (min-width: 768px) {
    .__pf [style*="--s-sm"] {
        margin: 0 calc(-1 * var(--s-sm));
    }
    .__pf [style*="--c-sm"] {
        max-width: calc(100%/12*var(--c-sm));
        flex-basis: calc(100%/12*var(--c-sm));
    }
    .__pf [style*="--s-sm"] > .pf-c {
        padding: var(--s-sm);
    }
    .__pf [style*="--ew-sm"] > .pf-c {
        flex-basis: calc(100% / var(--ew-sm));
        max-width: calc(100% / var(--ew-sm));
    }
}
@media (min-width: 1025px) {
    .__pf [style*="--s-md"] {
        margin: 0 calc(-1 * var(--s-md));
    }
    .__pf [style*="--c-md"] {
        max-width: calc(100%/12*var(--c-md));
        flex-basis: calc(100%/12*var(--c-md));
    }
    .__pf [style*="--s-md"] > .pf-c {
        padding: var(--s-md);
    }
    .__pf [style*="--ew-md"] > .pf-c {
        flex-basis: calc(100% / var(--ew-md));
        max-width: calc(100% / var(--ew-md));
    }
}
@media (min-width: 1200px) {
    .__pf [style*="--s-lg"] {
        margin: 0 calc(-1 * var(--s-lg));
    }
    .__pf [style*="--c-lg"] {
        max-width: calc(100%/12*var(--c-lg));
        flex-basis: calc(100%/12*var(--c-lg));
    }
    .__pf [style*="--s-lg"] > .pf-c {
        padding: var(--s-lg);
    }
    .__pf [style*="--ew-lg"] > .pf-c {
        flex-basis: calc(100% / var(--ew-lg));
        max-width: calc(100% / var(--ew-lg));
    }
    .__pf .pf-lg-hide {
        display: none !important;
    }
}
.__pf .pf-r-eh > .pf-c {
    display: flex;
}
.__pf .pf-r-eh > .pf-c > div {
    width: 100%;
}
.__pf .pf-c-lt {
    justify-content: flex-start;
    align-items: flex-start;
}
.__pf .pf-c-ct {
    justify-content: center;
    align-items: flex-start;
}
.__pf .pf-c-rt {
    justify-content: flex-end;
    align-items: flex-start;
}
.__pf .pf-c-lm {
    justify-content: flex-start;
    align-items: center;
}
.__pf .pf-c-cm {
    justify-content: center;
    align-items: center;
}
.__pf .pf-c-rm {
    justify-content: flex-end;
    align-items: center;
}
.__pf .pf-c-lb {
    justify-content: flex-start;
    align-items: flex-end;
}
.__pf .pf-c-cb {
    justify-content: center;
    align-items: flex-end;
}
.__pf .pf-c-rb {
    justify-content: flex-end;
    align-items: flex-end;
}
`