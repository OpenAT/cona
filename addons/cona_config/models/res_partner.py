# -*- coding: utf-'8' "-*-"
from openerp import api, models, fields, SUPERUSER_ID

import logging
_logger = logging.getLogger(__name__)


# Additional fields for the web checkout
class ResPartner(models.Model):
    _inherit = 'res.partner'

    anmeldung_nl_ueber_patenschaft = fields.Boolean(string="Anmeldung Newsletter über Patenschaft")

