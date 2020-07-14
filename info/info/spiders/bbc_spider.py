import scrapy
from ..items import InfoItem

class BbcSpiderSpider(scrapy.Spider):
    name = 'bbc'
    start_urls = ['https://www.bbc.com']

    def parse(self, response):
        items = InfoItem()

        all_li = response.css('li.media-list__item ')
        for li in all_li:
            title = li.css('.media__title .media__link::text').extract()
            summary = li.css('.media__summary::text').extract()
            url = li.css('.media__title a.media__link').xpath("@href").extract()
            category = li.css('.media__tag::text').extract()
            img_url = li.css('.media__image .responsive-image').css('::attr(src)').extract()
            title1 = []
            summary1 = []
            for x in title:
                title1.append(x.strip())
            for x in summary:
                summary1.append(x.strip())
            items['title'] = title1
            items['summary'] = summary1
            items['url'] = url
            items['category'] = category
            items['img_url'] = img_url
            yield items

