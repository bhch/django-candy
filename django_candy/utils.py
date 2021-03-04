from rest_framework import pagination


class LimitOffsetPagination(pagination.LimitOffsetPagination):
    default_limit = 20
    max_limit = 100