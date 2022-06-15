# -*- coding: utf-'8' "-*-"
from openerp import api, models, fields

__author__ = 'Joachim Grubelnik'


# Product Template
class ProductTemplate(models.Model):
    _inherit = 'product.template'

    website_theme = fields.Selection(selection_add=[('cona_inline', 'Concordia Inline'),
                                                    ('cona_inline_test', 'Concordia Inline Testtheme'),
                                                    ('cona_theme_a', 'Concordia Theme A'),
                                                    ('cona_theme_b', 'Concordia Theme B'),
                                                    ('cona_theme_c', 'Concordia Theme C')])
