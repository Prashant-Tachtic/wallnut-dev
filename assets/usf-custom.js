/* USF file - Do not modify this file since it is regularly changed. Auto modified at: 1/13/2021 4:35:11 AM*/

var usfImageWidths, usfFilesUrl;
 
 /*Show color option with title*/
   var titleWithColor = function(p){
    var selectedVariant = p.selectedVariantId ? p.variants.find(v => v.id === p.selectedVariantId) : p.variants[0];
    var option = p.options.find(o => o.name === 'Color' || o.name === 'Colour');
    var html = p.title
    if(option){
        for (let i = 0; i < option.values.length; i++) {
            var optVal = option.values[i];
            for (let n = 0; n < selectedVariant.options.length; n++){
                if (optVal == selectedVariant.options[n])
                    html+= `, ${optVal}`
            }
        }
    }
    return html
} 

// define templates for the Mr Parker theme
var _usfProductLabels = `
<div v-if="isSoldOut && usf.settings.search.showSoldOut" class="so icn" v-html="loc.soldOut"></div>
<template v-else>
    <div v-if="product.collections.find(c => _usfHandlezie(c.title) == 'new')" class="new icn" v-html="_usfNew"></div>
    <div v-if="hasDiscount && usf.settings.search.showSale" class="sale-item icn" v-html="loc.sale"></div>
</template>
`;
var _usfProductPrice = `
<div class="price">
    <template v-if="hasDiscount">
        <div class="onsale"><span class="money"  v-html="displayDiscountedPrice"></span></div>
        <div class="was"><span class="money" v-html="displayPrice"></span></div>
    </template>
    <div v-else class="prod-price">
        <template v-if="priceVaries">
            <span v-html="usf.settings.translation.from"></span>
            <span class="money" v-html="displayMinDiscountedPrice"></span> - <span class="money" v-html="displayMaxDiscountedPrice"></span>
        </template>
        <span v-else class="money" v-html="displayDiscountedPrice"></span>
    </div>
</div>
`;
var _usfFilterBodyTemplate = /*inc_begin_filter-body*/
`<!-- Range filter -->
<div v-if="isRange" class="usf-facet-values usf-facet-range">
    <!-- Range inputs -->
    <div class="usf-slider-inputs usf-clear">
        <span class="usf-slider-input__from">
            <span class="usf-slider-input__prefix" v-html="facet.sliderPrefix" v-if="facet.showSliderInputPrefixSuffix"></span>
            <input :readonly="!hasRangeInputs" :value="rangeConverter(range[0]).toFixed(rangeDecimals)" @change="e => onRangeInput(e, range[0], 0)">
            <span class="usf-slider-input__suffix" v-html="facet.sliderSuffix" v-if="facet.showSliderInputPrefixSuffix"></span>
        </span>
        <span class="usf-slider-div">-</span>
        <span class="usf-slider-input__to">
            <span class="usf-slider-input__prefix" v-html="facet.sliderPrefix" v-if="facet.showSliderInputPrefixSuffix"></span>
            <input :readonly="!hasRangeInputs" :value="rangeConverter(range[1]).toFixed(rangeDecimals)" @change="e => onRangeInput(e, range[1], 1)">
            <span class="usf-slider-input__suffix" v-html="facet.sliderSuffix" v-if="facet.showSliderInputPrefixSuffix"></span>
        </span>
    </div>
	<!-- See API reference of this component at https://docs.sobooster.com/search/storefront-js-api/slider-component -->
    <usf-slider :color="facet.sliderColor" :symbols="facet.sliderValueSymbols" :prefix="facet.sliderPrefix" :suffix="facet.sliderSuffix" :min="facet.min" :max="facet.max" :pips="facet.range[0]" :step="facet.range[1]" :decimals="rangeDecimals" :value="range" :converter="rangeConverter" @input="onRangeSliderInput" @change="onRangeSliderChange"></usf-slider>
</div>
<!-- List + Swatch filter -->
<div v-else ref="values" :class="'usf-facet-values usf-facet-values--' + facet.display + (facet.navigationCollections ? ' usf-navigation' : '') + (facet.valuesTransformation ? (' usf-' + facet.valuesTransformation.toLowerCase()) : '') + (facet.circleSwatch ? ' usf-facet-values--circle' : '')" :style="!usf.isMobile && facet.maxHeight ? { maxHeight: facet.maxHeight } : null">
    <!-- Filter options -->                
    <usf-filter-option v-for="o in visibleOptions" :facet="facet" :option="o" :key="o.label"></usf-filter-option>
</div>

<!-- More -->
<div v-if="isMoreVisible" class="usf-more" @click="onShowMore" v-html="loc.more"></div>`
/*inc_end_filter-body*/;

var _usfSearchResultsSkeletonItemTpl = `
<div v-if="view === 'grid'" class="usf-sr-product grid__item product-index usf-skeleton" :class="[_usf_column_width]">
    <div class="grid-view-item" v-if="true">
        <div class="usf-img"></div>
        <div class="usf-meta">            
        </div>
    </div>
</div>
<a class="usf-sr-product list-view-item usf-skeleton" v-else>
    <!-- Image column -->
    <div class="list-view-item__image-column" v-if="true">
        <div class="list-view-item__image-wrapper" v-if="true">
            <div class="usf-img"></div>
        </div>
    </div>

    <!-- Title and Vendor column -->
    <div class="list-view-item__title-column" v-if="true">
        <div class="list-view-item__title"></div>
        <div class="list-view-item__vendor medium-up--hide"></div>
    </div>

    <!-- Vendor, for mobile -->
    <div class="list-view-item__vendor-column small--hide" v-if="true">
        <div class="list-view-item__vendor"></div>
    </div>

    <!-- Prices -->
    <div class="list-view-item__price-column" v-if="true">
        <div class="usf-price product-price__price"></div>
    </div>
</a>
`;

var _usfSearchResultsSummaryTpl = `<span class="usf-sr-summary" v-html="loader === true ? '&nbsp;' : usf.utils.format(term ? loc.productSearchResultWithTermSummary : loc.productSearchResultSummary, result.total, term)"></span>`;
var _usfSearchResultsViewsTpl =
    `<div class="usf-views">
    <div class="usf-view usf-grid" :class="{'usf-active': view === 'grid'}" @click="onGridViewClick"><svg role="presentation" viewBox="0 0 36 36"><path fill="currentColor" d="M8 0L0 0L0 8L8 8L8 0ZM14 0L22 0L22 8L14 8L14 0ZM36 0L28 0L28 8L36 8L36 0ZM0 14L8 14L8 22L0 22L0 14ZM22 14L14 14L14 22L22 22L22 14ZM28 14L36 14L36 22L28 22L28 14ZM8 28L0 28L0 36L8 36L8 28ZM14 28L22 28L22 36L14 36L14 28ZM28 36L28 28L36 28L36 36L28 36Z"/></svg></div>
    <div class="usf-view usf-list" :class="{'usf-active': view === 'list'}" @click="onListViewClick"><svg role="presentation" viewBox="0 0 18 18"><path d="M8 1.030067h9c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 7h9c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm0 7h9c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1H8c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm-7-15h2c.55228475 0 1 .44771525 1 1v2c0 .55228475-.44771525 1-1 1H1c-.55228475 0-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .44771525 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.55228475.44771525-1 1-1zm0 7h2c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1H1c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1z" fill="currentColor"></path></svg></div>
</div>`;
var _usfSearchResultsSortByTpl = `<usf-dropdown :value="sortBy" :options="sortByOptions" @input="onSortByChanged"></usf-dropdown>`;

usf.templates = {
    app: `
<div id="usf_container" class="usf-zone usf-clear" :class="{'usf-filters-horz': usf.settings.filters.horz}">
    <usf-filters></usf-filters>
    <usf-sr></usf-sr>
</div>
`,
    searchResults: `
<div class="usf-sr-container" :class="{'usf-no-facets': noFacets, 'usf-empty': !loader && !hasResults, 'usf-nosearch': !showSearchBox}">
    <!-- Search form -->
    <form v-if="showSearchBox" action="/search" method="get" role="search" class="usf-sr-inputbox">
        <input name="q" autocomplete="off" ref="searchInput" v-model="termModel">
        <button type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><circle class="usf-path" cx="10.981" cy="10.982" r="9.786"></circle> <line class="usf-path" x1="23.804" y1="23.804" x2="17.902" y2="17.901"></line></svg>
        </button>
        <span v-if="termModel" class="usf-remove" @click="clearSearch"></span>
    </form>

    <div class="usf-sr-config" v-if="usf.isMobile">
        <div class="usf-sr-config__mobile-filters-wrapper">
            ` + _usfSearchResultsSortByTpl + `
            <div class="usf-filters" :class="{'usf-has-filters': !!facetFilters}" @click="document.body.classList.toggle('usf-mobile-filters')">
                <span class="usf-icon"><svg width="17" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16"><g fill="currentColor" fill-rule="evenodd"><rect x="2" width="1" height="5" rx=".5"></rect><rect x="8" width="1" height="9" rx=".5"></rect><rect x="14" width="1" height="3" rx=".5"></rect><rect x="2" y="8" width="1" height="8" rx=".5"></rect><rect x="8" y="12" width="1" height="4" rx=".5"></rect><rect x="14" y="6" width="1" height="10" rx=".5"></rect><path d="M2.5 8.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6-5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill-rule="nonzero"></path></g></svg></span>
                <span v-html="loc.filters"></span>
            </div>
        </div>
        
        ` + _usfSearchResultsSummaryTpl + _usfSearchResultsViewsTpl + `
    </div>
    <div class="usf-sr-config" v-else>
        ` + _usfSearchResultsSummaryTpl + _usfSearchResultsSortByTpl + _usfSearchResultsViewsTpl + `
    </div>

    <usf-sr-banner v-if="result && result.extra && result.extra.banner && !result.extra.banner.isBottom" :banner="result.extra.banner"></usf-sr-banner>

    <div :id="view == 'grid' ? 'product-loop' : 'product-list'" :class="(view === \'grid\' ? \'\' : \'list-view-items\') + \' usf-results usf-clear usf-\' + view">
        <template v-if="loader===true">` + _usfSearchResultsSkeletonItemTpl + _usfSearchResultsSkeletonItemTpl + _usfSearchResultsSkeletonItemTpl + _usfSearchResultsSkeletonItemTpl +
        `</template>
        <template v-else>
            <template v-if="loader === true || hasResults">
                <template v-if="view === 'grid'">
                    <template v-for="p in result.items"><usf-sr-griditem :product="p" :result="result"></usf-sr-griditem></template>
                </template>
                <template v-else>
                    <template v-for="p in result.items"><usf-sr-listitem :product="p" :result="result"></usf-sr-listitem></template>
                </template>
            </template>
            <template v-else>
                <!-- Empty result -->
                <div class="usf-sr-empty">
                    <div class="usf-icon"></div>
                    <span v-html="term ? usf.utils.format(loc.productSearchNoResults, term) : loc.productSearchNoResultsEmptyTerm"></span>
                </div>
            </template>
        </template>
    </div>

    <usf-sr-banner v-if="result && result.extra && result.extra.banner && result.extra.banner.isBottom" :banner="result.extra.banner"></usf-sr-banner>

    <!-- Paging & load more -->
    <div class="usf-sr-paging" v-if="loader !== true">
        <div class="usf-sr-loader" v-if="loader === 'more'">
            <div class="usf-spinner"></div>
        </div>        
        
        <!-- Load more -->
        <div class="usf-sr-more" v-else-if="hasResults && usf.settings.search.more === 'more'">
            <div class="usf-title" v-html="usf.utils.format(loc.youHaveViewed, itemsLoaded, result.total)"></div>
            <div class="usf-progress">
                <div :style="{width: (itemsLoaded * 100 / result.total) + '%'}"></div>
            </div>
            <div v-if="itemsLoaded < result.total" class="usf-load-more" @click="onLoadMore" v-html="loc.loadMore"></div>
        </div>
        <usf-sr-pages v-else-if="hasResults && usf.settings.search.more === 'page'" :page="page" :pages-total="pagesTotal" :pages-to-display="4" :side-pages-to-display="1"></usf-sr-pages>
    </div>
</div>
`,
    searchResultsGridViewItem: `
<div :class="'product-index ' + _usf_column_width" :data-alpha="product.title" :data-price="price"  :data-color-options="_usfGetOptionList(product,'Color')" :data-size-options="_usfGetOptionList(product,'Size')" data-aos="none" :key="product.Id"  @click="onItemClick" @mouseover="onItemHover" @mouseleave="onItemLeave">
    <a :href="productUrl">
        <div :class="'reveal ' + _usfGlobalSettings.image_ratio + '-images'">
            <div class="box-ratio" :style="'padding-bottom: ' + 100/_usfGetImageRatio(selectedImage) + '%'">
                <img class="lazyload lazyload-fade usf-main-image" :data-original="_usfGetScaledImageUrl(scaledSelectedImageUrl,'600')" :id="product.id" :data-src="_usfGetScaledImageUrl(scaledSelectedImageUrl)" data-sizes="auto" :alt="product.title">
            </div>
            <div class="hidden image-2" v-if="(hoverImageUrl || (product.images[1] && product.images[1].url)) && _usfGlobalSettings.display_options == 'image-switch'">
                <div class="box-ratio" :style="'padding-bottom: ' + 100/_usfGetImageRatio((hoverImage ? hoverImage : product.images[1])) + '%'">
                    <img :src="hoverImageUrl" class="lazyload lazyload-fade" :id="product.id + '-2'" :data-src="_usfGetScaledImageUrl(scaledHoverImageUrl ? scaledHoverImageUrl :_usfGetOriginImgWithSize(product.images[1].url,'{size}x') ) " data-sizes="auto" :alt="product.title">
                </div>
            </div>
            `+ _usfProductLabels +`
            <!-- product image extra
            <usf-plugin name="searchResultsProductImageExtra" :data="pluginData"></usf-plugin> -->
            <!-- Wishlist -->
            <usf-plugin name="searchResultsProductWishList" :data="pluginData"></usf-plugin>
            <!-- Labels 
            <usf-plugin name="searchResultsProductLabel" :data="pluginData"></usf-plugin>-->
        </div>
    </a>
    <div class="product-info">
        <a :href="productUrl">
            <!--vendor-->
            <p  v-if="usf.settings.search.showVendor && _usfGlobalSettings.vendor"><em v-html="product.vendor"></em></p>
            <!--title-->
            <div class="prod-title" v-html="titleWithColor(product)"></div>
        </a>
        <div style="text-align: center">
            <div class="yotpo bottomLine" style="display:inline-block" :data-product-id="product.id"">
        </div>
        <!--price-->
        `+ _usfProductPrice+`
        <!-- Product review -->
        <usf-plugin name="searchResultsProductReview" v-if="_usfGlobalSettings.show_product_review_stars" :data="pluginData"></usf-plugin>
        <template v-if="product.variants.length > 1">
               <usf-sizes v-if="_usfGlobalSettings.product_info == 'sizes'" :value="product"></usf-sizes>
               <usf-swatches v-else-if="_usfGlobalSettings.product_info == 'colors'" :value="product"></usf-swatches>
         </template>
         <div v-if="_usfGlobalSettings.product_info == 'add_to_cart' && !_usfGlobalSettings.quickview" class="quick-add-to-cart">
                <form v-if="!isSoldOut && product.variants.length == 1" method="post" action="/cart/add" :id="'product_form_' + product.id" accept-charset="UTF-8" class="shopify-product-form" enctype="multipart/form-data" :data-product-form="_usf_product_form_config">
                   <input type="hidden" name="form_type" value="product">
                   <input type="hidden" name="utf8" value="✓">
                   <div class="product-variants"></div>
                   <input type="hidden" id="" name="id" data-sku="" :value="selectedVariantForPrice.id">
                   <div class="product-add">
                      <input id="AddToCart" type="submit" name="button" class="add clearfix" :value="loc.addToCart"  @click="e => usf.__addCartAjax(e.target)">
                   </div>
                </form>

               <div v-else class="product-add">
                  <a class="add options button clearfix" :href="productUrl" v-html="loc.chooseOptions"></a>
                </div>
            </div>
    </div>
</div>
`,

    // Search result pages
    searchResultsPages: `
<div id="pagination" class="desktop-12 tablet-6 mobile-3">
    <template v-for="e in elements">
        <a v-if="e.type === 'prev'" href="javascript:void(0)" :title="loc.prevPage" @click="onPrev"><i class="fas fa-angle-left" aria-hidden="true"></i></a>
        <span v-else-if="e.type === 'dots'" class="deco">…</span>
        <span v-else-if="e.type === 'page' && e.current" class="current">{{e.page}}</span>
        <a v-else-if="e.type === 'page' && !e.current" href="javascript:void(0)" @click="onPage(e.page)" :title="usf.utils.format(loc.gotoPage,e.page)">{{e.page}}</a>
        <a v-if="e.type === 'next'" href="javascript:void(0)" :title="loc.nextPage" @click="onNext"><i class="fas fa-angle-right" aria-hidden="true"></i></a>
    </template>
</div>
`,

    searchResultsListViewItem: `
<a class="usf-sr-product list-view-item" @click="onItemClick" @mouseover="onItemHover" @mouseleave="onItemLeave" :href="productUrl" :key="product.id">
    <!-- Image column -->
    <div class="list-view-item__image-column">
        <div class="list-view-item__image-wrapper">
            <img class="list-view-item__image" :src="imageUrl">
            `+ _usfProductLabels+`
        </div>
    </div>

    <!-- Title and Vendor column -->
    <div class="list-view-item__title-column">
        <div class="list-view-item__title" v-html="titleWithColor(product)"></div>
        <div v-if="usf.settings.search.showVendor && _usfGlobalSettings.vendor" class="list-view-item__vendor" v-html="product.vendor"></div>
    </div>

    <!-- Prices -->
    <div class="list-view-item__price-column">
        `+ _usfProductPrice+`
    </div>
</a>
`,
    // AddToCart Plugin	
    addToCartPlugin: /*inc_begin_addtocart-plugin*/
`<form v-if="!(_usfGlobalSettings.product_info == 'add_to_cart' && !_usfGlobalSettings.quickview)" class="usf-add-to-cart" :data-form-variant-id="variant.id" method="POST" enctype="multipart/form-data" :action="usf.platform.addToCartUrl">
    <input type="hidden" name="form_type" value="product">
    <input type="hidden" name="utf8" value="✓">
    <input type="hidden" name="quantity" value="1">
    <input type="hidden" name="id" :value="variant.id">
    <input type="submit" name="add" :class="{'usf-visible': args.isHover}" class="usf-add-to-cart-btn" :value="loc.addToCart" @click="e => usf.__addCartAjax(e.target)">
</form>`
/*inc_end_addtocart-plugin*/,
    // Preview Plugin
    previewPlugin: /*inc_begin_preview-plugin*/
`<div class="usf-sr-preview" :class="{'usf-visible': args.isHover}" @click="onShowModal">
    <div><svg style="width:initial;height:initial" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g transform="translate(0.000000,281.000000) scale(0.100000,-0.100000)"><path d="M4808.6,2770.8c-1219.3-67-2423.2-610.6-3684.6-1659.5C884.8,912.3,100,140.9,100,104.6c0-34.4,794.3-819.2,1004.9-993.4c1138.9-941.7,2195.4-1468.1,3273-1630.8c306.3-45.9,821.1-55.5,1110.2-19.1C6663.3-2391.4,7832.8-1807.6,9023.4-774C9274.1-553.9,9900,73.9,9900,108.4c0,30.6-803.9,823-1004.9,989.6c-1098.7,909.2-2151.4,1445.1-3177.3,1617.4c-189.5,32.5-625.9,70.8-735,65.1C4944.5,2778.5,4866,2774.7,4808.6,2770.8z M5497.7,2296.2c1181-158.9,2425.1-846,3590.8-1983l212.5-206.7l-231.6-225.9c-1158-1135-2434.7-1829.8-3629.1-1977.2c-227.8-26.8-700.5-23-937.9,7.7c-417.3,57.4-851.8,181.8-1282.4,369.4C2452.4-1384.6,1543.2-743.4,865.6-60L702.9,104.6l172.3,174.2c509.1,513,1248,1075.7,1856.6,1410.7c562.7,310.1,1196.3,530.2,1751.4,606.8C4728.2,2330.6,5250.7,2330.6,5497.7,2296.2z"/><path d="M4670.8,1855.9c-671.8-128.2-1213.5-633.6-1397.3-1307.3c-59.3-212.5-59.3-675.7,0-888.1c172.3-625.9,654.6-1110.2,1276.7-1280.5c222-61.3,677.6-61.3,899.6,0c622.1,170.3,1104.4,654.6,1276.7,1280.5c59.3,212.5,59.3,675.7,0,888.1c-172.3,627.8-662.3,1117.8-1276.7,1280.5C5246.9,1880.8,4875.6,1894.2,4670.8,1855.9z M5373.2,1387c233.5-72.7,386.6-166.5,566.6-344.5c268-266.1,388.6-557,388.6-937.9c0-379-120.6-669.9-390.5-937.9c-268-269.9-558.9-390.5-937.9-390.5c-241.2,0-386.6,34.4-612.5,145.5c-130.2,63.2-195.2,111-325.4,243.1c-273.7,275.6-392.4,557-392.4,939.8c0,382.8,118.7,664.2,392.4,937.9c210.5,212.5,436.4,331.1,723.5,382.8C4929.2,1452.1,5222,1432.9,5373.2,1387z"/><path d="M4818.2,508.4c-283.3-132.1-348.4-509.1-122.5-723.5c281.4-266,744.6-68.9,744.6,319.7c0,179.9-109.1,342.6-271.8,409.6C5072.7,554.4,4912,552.4,4818.2,508.4z"/></g></svg></div>
    <span v-html="loc.quickView"></span>
</div>`
/*inc_end_preview-plugin*/,
    previewPluginModal: 
`<div><div class="usf-backdrop"></div><div class="usf-preview__wrapper usf-zone">
    <div class="usf-preview">
        <!-- Close button -->
        <div class="usf-remove" @click="onClose"></div>

        <!-- Body content -->
        <div class="usf-preview__body">
            <!-- left - images of product -->
            <div class="usf-preview__content-left">
                <!-- Big image -->
                <div class="usf-preview__image-slider">
                    <div type="button" title="Prev" class="usf-preview__image-slider__prev" @click="onPrevImage(0)" v-if="showBigImageNav">
                        <svg aria-hidden="true" viewBox="0 0 512 512" class=""><path fill="currentColor" d="M358 512c4 0 7-1 9-4 5-5 5-13 0-18L146 269 367 47c5-5 5-13 0-18s-13-5-18 0L119 260c-5 5-5 13 0 18l230 230c3 3 6 4 9 4z"></path></svg>
                    </div>

                    <div class="usf-preview__image-slider__track" :style="'max-width:' + ((image.height/image.width*imageMaxWidth > imageMaxHeight) ? (imageMaxHeight*image.width/image.height) + 'px' : '100%') + ';padding-bottom:' + ((image.height/image.width*imageMaxWidth > imageMaxHeight) ? (imageMaxHeight*100/imageMaxWidth) : (image.height/image.width*100)) + '%'">
                        <div v-for="i in images" class="usf-preview__image" :class="{'usf-active': image === i}">
                            <div class="usf-preview__image-img-wrapper">
                                <img :src="usf.platform.getImageUrl(i.url, 1024)">
                            </div>
                        </div>
                        <!--labels-->
                        <div  v-if="isSoldOut && usf.settings.search.showSoldOut" class="so icn" v-html="loc.soldOut"></div>
                        <div v-if="hasDiscount && usf.settings.search.showSale && !isSoldOut" class="sale-item icn" v-html="loc.sale"></div>
                    </div>

                    <div type="button" title="Next" class="usf-preview__image-slider__next" @click="onNextImage(0)" v-if="showBigImageNav">
                        <svg aria-hidden="true" viewBox="0 0 512 512" class=""><path fill="currentColor" d="M128 512c-3 0-7-1-9-4-5-5-5-13 0-18l221-221L119 47c-5-5-5-13 0-18s13-5 18 0l230 231c5 5 5 13 0 18L137 508c-2 3-6 4-9 4z"></path></svg>
                    </div>

                    <ul class="usf-preview__image-slider__dots" v-if="showImageIndices && false">
                        <li :class="{'active':i===image}" v-for="(i,index) in images"  @click="onThumbClick(i)"><button type="button">{{index+1}}</button></li>
                    </ul>
                </div>

                <!-- Thumbnails -->
                <div class="usf-preview__thumbs usf-clear" v-if="showThumbs">
                    <div v-if="showThumbNav" class="usf-preview__thumbs-prev" @click="onPrevImage">
                        <svg aria-hidden="true" viewBox="0 0 512 512" class=""><path fill="currentColor" d="M358 512c4 0 7-1 9-4 5-5 5-13 0-18L146 269 367 47c5-5 5-13 0-18s-13-5-18 0L119 260c-5 5-5 13 0 18l230 230c3 3 6 4 9 4z"></path></svg>
                    </div>

                    <div class="usf-preview__thumbs-inner">
                        <div v-for="i in images" class="usf-preview__thumb" :class="{'usf-active': image === i}">
                            <img :src="usf.platform.getImageUrl(i.url, 'small')" @click="onThumbClick(i)">
                        </div>
                    </div>

                    <div v-if="showThumbNav" class="usf-preview__thumbs-next" @click="onNextImage">
                        <svg aria-hidden="true" viewBox="0 0 512 512" class=""><path fill="currentColor" d="M128 512c-3 0-7-1-9-4-5-5-5-13 0-18l221-221L119 47c-5-5-5-13 0-18s13-5 18 0l230 231c5 5 5 13 0 18L137 508c-2 3-6 4-9 4z"></path></svg>                        
                    </div>
                </div>
            </div>

            <!-- right - info of the product -->
            <div class="usf-preview__content-right">
                <!-- Product title -->
                <h1 class="usf-preview__title" v-html="titleWithColor(product)"></h1>

                <!-- Vendor -->
                <div class="usf-preview__vendor" v-html="product.vendor" v-if="usf.settings.search.showVendor"></div>

                <!--Prices -->
                <div class="usf-preview__price-wrapper price" :class="{'price--sold-out': isSoldOut}">
                    <div class="price">
                        <div v-if="hasDiscount" class="onsale"><span class="money" v-html="usf.utils.getLongDisplayPrice(selectedVariant.price)"></span></div>
                        <div v-if="hasDiscount" class="was"><span class="money" v-html="usf.utils.getLongDisplayPrice(selectedVariant.compareAtPrice || selectedVariant.price)"></span></div>
                        <div v-if="!hasDiscount" class="prod-price">
                            <span class="money" v-html="usf.utils.getLongDisplayPrice(selectedVariant.compareAtPrice || selectedVariant.price)"></span>
                        </div>
                    </div>
                </div>

                <!-- Description -->
                <div class="usf-preview__description" v-html="product.description"></div>

                <!-- Add to cart form -->
                <form method="post" enctype="multipart/form-data" :action="usf.platform.addToCartUrl">
                    <!-- variant ID -->
                    <input type="hidden" name="id" :value="selectedVariant.id" />

                    <!-- Options -->
                    <template v-for="o in product.options">
                        <usf-preview-modal-option :option="o"></usf-preview-modal-option>
                    </template>

                    <!-- add to card button -->
                    <div class="usf-preview__field">
                        <label v-html="loc.quantity"></label>
                        <div class="usf-flex usf-preview__add-to-cart">
                            <input pattern="[0-9]*" min="1" :value="quantity" name="quantity" type="number" />
                            <input :title="!hasAvailableVariant ? loc.selectedVariantNotAvailable : ''" :disabled="!hasAvailableVariant" type="submit" name="add" class="usf-preview--add-to-cart-btn" :class="{ 'usf-disabled': !hasAvailableVariant}" :value="isSoldOut ? loc.soldOut : loc.addToCart" @click="e => usf.__addCartAjax(e.target)"></button>
                        </div>
                    </div>
                </form>

                <!-- See details link -->
                <div class="usf-preview__link-wrapper">
                    <a class="usf-preview__link" :href="productUrl" v-html="loc.seeFullDetails"></a>
                </div>
            </div>
        </div>
    </div>
</div></div>`,
    gotoTop: /*inc_begin_goto-top*/
`<div class="usf-goto-top">
    <div class="usf-icon usf-icon-up"></div>
</div>`
/*inc_end_goto-top*/,
    searchResultsBanner: /*inc_begin_search-banner*/        
`<div class="usf-sr-banner">
    <a :href="banner.url || 'javascript:void(0)'" :alt="banner.description">
        <img :src="banner.mediaUrl" style="max-width:100%">
    </a>
</div>
`
/*inc_end_search-banner*/,

		////////////////////////
    // Filter templates
    // facet filters breadcrumb
    filtersBreadcrumb: /*inc_begin_filters-breadcrumb*/
`<div v-if="usf.settings.filterNavigation.showFilterArea && root.facetFilters && root.facets && facetFilterIds.length" class="usf-refineby">
    <!-- Breadcrumb Header -->
    <div class="usf-title usf-clear">
        <span class="usf-pull-left usf-icon usf-icon-equalizer"></span>
        <span class="usf-label" v-html="loc.filters"></span>

        <!-- Clear all -->
        <button class="usf-clear-all usf-btn" v-html="loc.clearAll" @click="root.removeAllFacetFilters" :aria-label="loc.clearAllFilters"></button>
    </div>

    <!-- Breadcrumb Values -->
    <div class="usf-refineby__body">
        <template v-for="facetId in facetFilterIds" v-if="(facet = root.facets.find(fc => fc.id === facetId)) && (f = root.facetFilters[facetId])">
            <template v-for="queryValStr in f[1]">
                <div class="usf-refineby__item usf-pointer usf-clear" @click="root.removeFacetFilter(facetId, queryValStr)">
                    <button class="usf-btn"><span class="usf-filter-label" v-html="facet.title + ': '"></span><b v-html="root.formatBreadcrumbLabel(facet, f[0], queryValStr)"></b></button><span class="usf-remove"></span>
                </div>
            </template>
        </template>
    </div>
 </div>`
 /*inc_end_filters-breadcrumb*/,

    // facet filters    
    filters: /*inc_begin_filters*/
// Vert & Horz modes have different render order
`<div class="usf-facets usf-no-select usf-zone">
<!-- Mobile view -->
<template v-if="usf.isMobile">
    <div class="usf-close" @click="onMobileBack(1)"></div>
    <div class="usf-facets-wrapper">
        <!-- Header. shows 'Filters', facet name, etc. -->
        <div class="usf-header">
            <!-- Single facet mode -->
            <template v-if="isSingleFacetMode">
                <div class="usf-title" @click="onMobileBack(0)" v-html="facets[0].title"></div>
                <div v-if="facetFilters" class="usf-clear" @click="removeAllFacetFilters" v-html="loc.clear"></div>
            </template>

            <!-- When a filter is selected -->
            <template v-else-if="mobileSelectedFacet">
                <div class="usf-title usf-back" @click="onMobileBack(0)" v-html="mobileSelectedFacet.title"></div>
                <div v-if="facetFilters && facetFilters[mobileSelectedFacet.id]" class="usf-clear" @click="removeFacetFilter(mobileSelectedFacet.id)" v-html="loc.clear"></div>
                <div v-else class="usf-all" v-html="loc.all"></div>
            </template>

            <!-- When no filter is selected -->
            <template v-else>
                <div class="usf-title" @click="onMobileBack(0)" v-html="loc.filters"></div>
                <div v-if="facetFilters" class="usf-clear" @click="removeAllFacetFilters" v-html="loc.clearAll"></div>
            </template>
        </div>

        <div class="usf-body">
            <!-- List all filter options, in single facet mode -->
            <usf-filter v-if="isSingleFacetMode" :facet="facets[0]"></usf-filter>

            <!-- List all filter options, when a filter is selected -->
            <usf-filter v-else-if="mobileSelectedFacet" :facet="mobileSelectedFacet"></usf-filter>

            <!-- List all when there are more than one facet -->
            <template v-else :key="f.id" v-for="f in facets">
                <template v-if="canShowFilter(f)">
                    <div class="usf-facet-value" @click="onMobileSelectFacet(f)">
                        <span class="usf-title" v-html="f.title"></span>
                        <div v-if="(selectedFilterOptionValues = facetFilters && (ff = facetFilters[f.id]) ? ff[1] : null)" class="usf-dimmed">
                            <span v-for="cf in selectedFilterOptionValues" v-html="formatBreadcrumbLabel(f, f.facetName, cf)"></span>
                        </div>
                    </div>
                </template>
            </template>
        </div>

        <!-- View items -->
        <div class="usf-footer">
            <div @click="onMobileBack(1)" v-html="loc.viewItems"></div>
        </div>
    </div>
</template>

<!-- Desktop view -->
<template v-else>
    <usf-filter-breadcrumb></usf-filter-breadcrumb>    
    <!-- Filters Loader -->
    <div v-if="!facets" class="usf-facets__first-loader">
        <template v-for="i in 3">
            <div class="usf-facet"><div class="usf-title usf-no-select"><span class="usf-label"></span></div>
                <div v-if="!usf.settings.filters.horz" class="usf-container"><div class="usf-facet-values usf-facet-values--List"><div class="usf-relative usf-facet-value usf-facet-value-single"><span class="usf-label"></span><span class="usf-value"></span></div><div class="usf-relative usf-facet-value usf-facet-value-single"><span class="usf-label"></span><span class="usf-value"></span></div></div></div>
            </div>
        </template>
    </div>
    <!-- Facets body -->
    <div v-else class="usf-facets__body">
        <usf-filter :facet="f" :key="f.id" v-for="f in facets"></usf-filter>
    </div>
</template>
</div>`
/*inc_end_filters*/,

    // facet filter item
    filter: /*inc_begin_filter*/
`<div v-if="canShow" class="usf-facet" :class="{'usf-collapsed': collapsed && !usf.isMobile, 'usf-has-filter': isInBreadcrumb}">
    <!-- Mobile filter -->
    <div v-if="usf.isMobile" class="usf-container">
        <!-- Search box -->
        <input v-if="hasSearchBox" class="usf-search-box" :aria-label="loc.filterOptions" :placeholder="loc.filterOptions" :value="term" @input="v => term = v.target.value">

        <!-- Values -->
        ` + _usfFilterBodyTemplate +
    `</div>

    <!-- Desktop filter -->
    <template v-else>
        <!-- Filter title -->
        <div class="usf-clear">
            <div class="usf-title usf-no-select" @click="onExpandCollapse">
                <button class="usf-label usf-btn" v-html="facet.title" :aria-label="usf.utils.format(loc.filterBy,facet.title)" :aria-expanded="!collapsed"></button>
                <usf-helptip v-if="facet.tooltip" :tooltip="facet.tooltip"></usf-helptip>            
                <!-- 'Clear all' button to clear the current facet filter. -->
                <button v-if="isInBreadcrumb" class="usf-clear-all usf-btn" :title="loc.clearFilterOptions" :aria-label="usf.utils.format(loc.clearFiltersBy,facet.title)" @click="onClear" v-html="loc.clear"></button>
            </div>
        </div>

        <!-- Filter body -->
        <div class="usf-container">
            <!-- Search box -->
            <input v-if="hasSearchBox" class="usf-search-box" :placeholder="loc.filterOptions" :value="term" @input="v => term = v.target.value">

            ` + _usfFilterBodyTemplate +
        `
        </div>
    </template>
</div>`
/*inc_end_filter*/,

    // facet filter option
    filterOption: /*inc_begin_filter-option*/
`<div v-if="children" :class="(isSelected ? 'usf-selected ' : '') + ' usf-relative usf-facet-value usf-facet-value-single usf-with-children' + (collapsed ? ' usf-collapsed' : '')">
    <!-- option label -->
    <button class="usf-children-toggle usf-btn" v-if="children" @click="onToggleChildren"></button>
    <button class="usf-label usf-btn" v-html="label" @click="onToggle"></button>

    <!-- product count -->
    <span v-if="!(!usf.settings.filterNavigation.showProductCount || (swatchImage && !usf.isMobile)) && option.value !== undefined" class="usf-value">{{option.value}}</span>    

    <div class="usf-children-container" v-if="children && !collapsed">
        <button :class="'usf-child-item usf-btn usf-facet-value' + (isChildSelected(c) ? ' usf-selected' : '')" v-for="c in children" v-html="getChildLabel(c)" @click="onChildClick(c)"></span>
    </div>
</div>
<div v-else :class="(isSelected ? 'usf-selected ' : '') + (swatchImage ? ' usf-facet-value--with-background' : '') + (' usf-relative usf-facet-value usf-facet-value-' + (facet.multiple ? 'multiple' : 'single'))" :title="isSwatch || isBox ? option.label + ' (' + option.value + ')' : undefined" :style="usf.isMobile ? null : swatchStyle" @click="onToggle">
    <!-- checkbox -->
    <div v-if="!isBox && !isSwatch && facet.multiple" :class="'usf-checkbox' + (isSelected ? ' usf-checked' : '')">
        <span class="usf-checkbox-inner"></span>
    </div>

    <!-- swatch image in mobile -->
    <div v-if="swatchImage && usf.isMobile" class="usf-mobile-swatch" :style="swatchStyle"></div>

    <!-- option label -->
    <button class="usf-label usf-btn" v-html="label"></button>

    <!-- helper for swatch -->
    <button v-if="isSwatch" class="usf-btn-helper usf-btn" :aria-checked="isSelected" role="checkbox"></button>
    
    <!-- product count -->
    <span v-if="!(!usf.settings.filterNavigation.showProductCount || (swatchImage && !usf.isMobile)) && option.value !== undefined" class="usf-value">{{option.value}}</span>
</div>`
/*inc_end_filter-option*/,



    // Instant search popup
    instantSearch: /*inc_begin_instantsearch*/
`<div :class="'usf-popup usf-zone usf-is usf-is--' + position + (shouldShow ? '' : ' usf-hide') + (isEmpty ? ' usf-empty' : '') + (firstLoader ? ' usf-is--first-loader': '')"  :style="usf.isMobile ? null : {left: this.left + 'px',top: this.top + 'px',width: this.width + 'px'}">
    <!-- Mobile search box -->
    <div v-if="usf.isMobile">
        <form class="usf-is__inputbox" :action="searchUrl" method="get" role="search">
            <span class="usf-icon usf-icon-back usf-close" @click="close"></span>
            <input name="q" autocomplete="off" ref="searchInput" :value="term" @input="onSearchBoxInput">
            <span class="usf-remove" v-if="term" @click="onClear"></span>
        </form>
    </div>

    <!-- First loader -->
    <div class="usf-is__first-loader" v-if="firstLoader">
        <div class="usf-clear">
            <div class="usf-img"></div>
            <div class="usf-title"></div>
            <div class="usf-subtitle"></div>
        </div>
        <div class="usf-clear">
            <div class="usf-img"></div>
            <div class="usf-title"></div>
            <div class="usf-subtitle"></div>
        </div>
        <div class="usf-clear">
            <div class="usf-img"></div>
            <div class="usf-title"></div>
            <div class="usf-subtitle"></div>
        </div>
    </div>

    <!-- All JS files loaded -->
    <template v-else>
        <!-- Empty view -->
        <div v-if="isEmpty" class="usf-is__no-results">
            <div style="background:url('https://cdn.shopify.com/s/files/1/0257/0108/9360/t/60/assets/no-items.png?t=2') center no-repeat;min-height:160px"></div>
            <div v-html="usf.utils.format(loc.noMatchesFoundFor, term)"></div>
        </div>
        <template v-else>
            <!-- Body content -->
            <div class="usf-is__content">
                <!-- Products -->
                <div class="usf-is__matches">
                    <div class="usf-title" v-html="loc.productMatches"></div>
                    
                    <div class="usf-is__products" v-if="result.items.length">
                        <!-- Product -->
                        <usf-is-item v-for="p in result.items" :product="p" :result="result" :key="p.id + '-' + p.selectedVariantId"></usf-is-item>
                    </div>
                    <div class="usf-is__products" v-else style="background:url('https://cdn.shopify.com/s/files/1/0257/0108/9360/t/60/assets/no-products.png?t=2') center no-repeat;min-height:250px"></div>
                </div>

                <!-- Suggestions, Collections, Pages -->
                <div class="usf-is__suggestions">
                    <!-- Suggestions -->
                    <template v-if="result.suggestions && result.suggestions.length">
                        <div class="usf-title" v-html="loc.searchSuggestions"></div>
                        <span v-for="s in result.suggestions" class="usf-is__suggestion" v-html="usf.utils.highlight(s, result.query)" @click="search(s)"></span>
                    </template>
                    
                    <!-- Collections -->
                    <template v-if="result.collections && result.collections.length">
                        <div class="usf-title" v-html="loc.collections"></div>

                        <template v-if="result.collections">
                            <span v-for="c in result.collections" class="usf-is__suggestion" v-html="usf.utils.highlight(c.title, result.query)" @click="selectCollection(c)"></span>
                        </template>
                    </template>

                    <!-- Pages -->
                    <template v-if="result.pages && result.pages.length">
                        <div class="usf-title" v-html="loc.pages"></div>

                        <template v-if="result.pages">
                            <span v-for="p in result.pages" class="usf-is__suggestion" v-html="usf.utils.highlight(p.title, result.query)" @click="selectPage(p)"></span>
                        </template>
                    </template>
                </div>
            </div>

            <!-- Footer -->
            <div class="usf-is__viewall">
                <span @click="search(queryOrTerm)" v-html="usf.utils.format(queryOrTerm ? loc.viewAllResultsFor : loc.viewAllResults, queryOrTerm)"></span>
            </div>
            
            <!-- Loader -->
            <div v-if="loader" class="usf-is__loader">
                <div class="usf-spinner"></div>
            </div>
        </template>
    </template>
</div>`
/*inc_end_instantsearch*/
    ,

    // Instant search item
    instantSearchItem:/*inc_begin_instantsearch-item*/
`<span class="usf-is__product usf-clear" @click="onItemClick">
    <!-- Image -->
    <div class="usf-img-wrapper usf-pull-left">
        <img class="usf-img" :src="selectedImageUrl">
    </div>
    
    <div class="usf-pull-left">
        <!-- Title -->
        <div class="usf-title" v-html="usf.utils.highlight(product.title, result.query)"></div>

        <!-- Vendor -->
        <div class="usf-vendor" v-html="product.vendor" v-if="usf.settings.search.showVendor"></div>

        <!-- Prices -->
        <div class="usf-price-wrapper">
            <span class="usf-price" :class="{ 'usf-has-discount': hasDiscount }" v-html="displayPrice"></span>
            <span v-if="hasDiscount" class="usf-discount product-price__price product-price__sale" v-html="displayDiscountedPrice"></span>
        </div>
    </div>
</span>
`
/*inc_end_instantsearch-item*/,
};
function _usfGetOptionList(p,option_name) {
    var option = p.options.find(o => o.name === option_name);
    if (!option)
        return 0;
    return option.values.join(',')
}

usf.__addCartAjax = function (e) {
    event.preventDefault();
    var $form = $(e).closest('form[action="/cart/add"]');
    var data = $form.serialize();
    var $btn = $(e).attr('type') === 'submit' ? $(e) : $(e).closest('button[type="submit"]');
    $btn.attr('disabled', 'disabled').addClass('disabled').val('...');;
    function successCallBack(item) {
        $btn.removeAttr('disabled').removeClass('disabled').val(usf.settings.translation.addToCart);
        var count = parseInt($('.cart-count').html());
        $('.cart-count').html(count + 1);
        setTimeout(function () {
            setTimeout(function () {
                if ($('.usf-remove').length)
                    $('.usf-remove').click();
            }, 500);
        }, 500);
    }
    function errorCallBack(data) {
        var errorMessage = data.responseJSON['description'];

        $btn.removeAttr('disabled').removeClass('disabled').val(errorMessage);
        setTimeout(function () {
            $btn.text(usf.settings.translation.addToCart)
        }, 2500);
    }
    function addItem(t, s, e) {
        var o = {
            type: "POST",
            url: "/cart/add.js",
            data: t,
            dataType: "json",
            success: function (t) {
                "function" == typeof s ? s(t) : Shopify.onItemAdded(t)
            },
            error: function (t, r) {
                "function" == typeof e ? e(t) : Shopify.onError(t, r)
            }
        };
        jQuery.ajax(o)
    }
    addItem(data, successCallBack, errorCallBack)
}

usf.event.add('init', function () {
    window._usfGlobalSettings = window._usfGlobalSettings || {
        color_swatch_options: "variant-image",
        display_options: "image-switch",
        image_ratio: "square",
        product_info: "colors",
        show_product_review_stars: true,
        vendor: true
    };
    window._usf_product_form_config = window._usf_product_form_config || `
        {
          "money_format": "${Shopify.money_format}",
          "enable_history": false,
          "currency_switcher_enabled": false,
          "sold_out": "${usf.settings.translation.soldOut}",
          "button": "${usf.settings.translation.addToCart}",
          "unavailable": "Unavailable"
        }
        `;
    window._usf_column_width = window._usf_column_width || "desktop-4 tablet-6 mobile-3 span-4";
    _usfImageWidths = _usfIsDynamicImage ? [180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2160, 2376, 2592, 2808, 3024] : [usf.settings.search.imageSize];

    /**
    * get image url file
    * */
    var nodes = document.head.children;
    for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        if (n.href && (n.href.indexOf('stylesheet.css') !== -1 || n.href.indexOf('theme.css') !== -1)) {
            usfFilesUrl = n.href;
            var m = usfFilesUrl.indexOf('/assets/');
            while (usfFilesUrl[--m] !== '/');
            while (usfFilesUrl[--m] !== '/');
            usfFilesUrl = usfFilesUrl.substring(0, m) + "/files/";
            break;
        }
    }


    if (usf.isMobile) {
        var dlg = function () {
            $.shifter("close");
        }

        // if the instant search is already showing, execute the dlg
        if (usf.isInstantSearchShowing)
            dlg();

        // still register to 'is_show' event to hide the drawer.
        usf.event.add('is_show', dlg);
    }

    /**
     * color swatch component
     * */
    var UsfSwatches = {
        props: {
            value: Object,
        },
        data() {
            var product = this.value;
            var option, option_index, option_handle;
            for (let i = 0; i < product.options.length; i++) {
                var o = product.options[i];
                var o_name = _usfHandlezie(o.name);
                if (o_name == 'color' || o_name == 'colour') {
                    option_handle = o_name;
                    option_index = i;
                    option = o;
                    break;
                }
            }
            return {
                product: product,
                option: option,
                optionRendereds: {},
                option_handle: option_handle,
                option_index: option_index,
            }
        },
        methods: {
            _onHover(imgUrl) {
                if (!imgUrl)
                    return;
                $(`.product-index[product-selector="${this.product.id}"] img.usf-main-image`).attr({
                    srcset: imgUrl
                });
            },
            _onLeave() {
                var originImgUrl = $(`.product-index[product-selector="${this.product.id}"] img.usf-main-image`).attr('data-original');
                $(`.product-index[product-selector="${this.product.id}"] img.usf-main-image`).attr({
                    srcset: originImgUrl
                });
            },
            _variantUrl(v) {
                return _usfAddQuery(this.$parent.productUrl, `variant=${v.id}`)
            }
        },
        render(h) {
            if (this.option) return h('div', { class: 'col-swatch' }, [
                h('ul', { class: `${this.option_handle} options`, attrs: { 'data-option-index': this.option_index } }, [
                    this.option.values.map((o, index) => {
                        var optHandled = _usfHandlezie(o);
                        var temp = _usfSplitByText(o, ' ', false, '');
                        var opt_handle_last = _usfHandlezie(temp);
                        for (let x = 0; x < this.product.variants.length; x++) {
                            var v = this.product.variants[x];
                            for (let i = 0; i < v.options.length; i++) {
                                var vrOpt = v.options[i];
                                if (o === vrOpt && !this.optionRendereds[0]) {
                                    this.optionRendereds[o] = 1;
                                    var img = this.product.images[v.imageIndex];
                                    var imgUrl;
                                    if (img)
                                        imgUrl = _usfGetOriginImgWithSize(img.url, 'large');

                                    return h('li', {
                                        attrs: {
                                            'data-option-title': o
                                        },
                                        class: `color ${optHandled}`,
                                        on: {
                                            mouseover: () => img ? this._onHover(imgUrl) : null,
                                            mouseleave: () => img ? this._onLeave() : null,
                                        }
                                    }, [
                                            h('a', { attrs: { href: this._variantUrl(v) } }, [
                                                _usfGlobalSettings.color_swatch_options == 'variant-image' && img ? h('img', { class: 'variant-image', attrs: { src: _usfGetOriginImgWithSize(img.url, '60x'), alt: this.product.title } }) :
                                                    h('span', { class: 'custom-image css-color', style: `width: 25px; height: 25px;background-color: ${opt_handle_last}; background-image: url(${usfFilesUrl + optHandled + '.png'})` })
                                            ])
                                        ])
                                }
                            }
                        }
                    }),
                ])
            ])

        }
    }
    usf.register(UsfSwatches, null, 'usf-swatches');

    /**
     * size Llist componet
     * */
    var UsfSizes = {
        props: {
            value: Object,
        },
        data() {
            var product = this.value;
            var option, option_index, option_handle;
            for (let i = 0; i < product.options.length; i++) {
                var o = product.options[i];
                var o_name = _usfHandlezie(o.name);
                if (o_name == 'size') {
                    option_handle = o_name;
                    option_index = i;
                    option = o;
                    break;
                }
            }
            return {
                product: product,
                option: option,
                optionRendereds: {},
                option_handle: option_handle,
                option_index: option_index,
            }
        },
        methods: {
            _variantUrl(v) {
                return _usfAddQuery(this.$parent.productUrl, `variant=${v.id}`)
            }
        },
        render(h) {
            if (this.option) return h('div', { class: 'size-swatch' }, [
                h('ul', { class: `${this.option_handle} options`, attrs: { 'data-option-index': this.option_index } }, [
                    this.option.values.map((o, index) => {
                        var optHandled = _usfHandlezie(o);
                        for (let x = 0; x < this.product.variants.length; x++) {
                            var v = this.product.variants[x];
                            for (let i = 0; i < v.options.length; i++) {
                                var vrOpt = v.options[i];
                                if (o === vrOpt && !this.optionRendereds[0] && !usf.utils.isVariantSoldOut(v)) {
                                    this.optionRendereds[o] = 1;
                                    return h('li', {
                                        attrs: {
                                            'data-option-title': o
                                        },
                                        class: `color ${optHandled}`,

                                    }, [
                                            h('a', { attrs: { href: this._variantUrl(v) } }, [o])
                                        ])
                                }
                            }
                        }
                    }),
                ])
            ])

        }
    }
    usf.register(UsfSizes, null, 'usf-sizes');



});

// refreshes yotpo star reviews on update.
usf.event.add('sr_updated', (e) => {
    yotpo.refreshWidgets();

    setTimeout(() => {
        $('.yotpo-bottomline .text-m').hide();
    }, 200);
});
