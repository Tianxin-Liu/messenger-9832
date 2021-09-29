from django.db import models

from . import utils
from .user import User
from .conversation import Conversation


class ConvonUser(utils.CustomModel):

    user = models.ForeignKey(
        User, on_delete=models.CASCADE, db_column="userId", related_name="+"
    )
    conversation = models.ForeignKey(
        Conversation,
        on_delete=models.CASCADE,
        db_column="conversationId",
        related_name="ConvonUser",
        related_query_name="ConvonUser"
    )
    createdAt = models.DateTimeField(auto_now_add=True, db_index=True)
    updatedAt = models.DateTimeField(auto_now=True)