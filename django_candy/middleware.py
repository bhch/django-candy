from django.http import HttpResponse, JsonResponse
from django.conf import settings


CORS_ALLOW_ORIGIN = getattr(settings, 'CORS_ALLOW_ORIGIN', '*')
CORS_ALLOW_METHODS = getattr(settings, 'CORS_ALLOW_METHODS', ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'])
CORS_ALLOW_HEADERS = getattr(settings, 'CORS_ALLOW_HEADERS', ['content-type', 'authorization'])
CORS_ALLOW_CREDENTIALS = getattr(settings, 'CORS_ALLOW_CREDENTIALS', True)
CORS_EXPOSE_HEADERS = getattr(settings, 'CORS_EXPOSE_HEADERS', ['content-type', 'location'])

class CorsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def set_headers(self, response):
        response['Access-Control-Allow-Origin'] = CORS_ALLOW_ORIGIN
        response['Access-Control-Allow-Methods'] = ','.join(CORS_ALLOW_METHODS)
        response['Access-Control-Allow-Headers'] = ','.join(CORS_ALLOW_HEADERS)
        response['Access-Control-Allow-Credentials'] = 'true' if CORS_ALLOW_CREDENTIALS else 'false'
        response['Access-Control-Expose-Headers'] = ','.join(CORS_EXPOSE_HEADERS)

        return response

    def __call__(self, request):
        #self.process_request(request)
        #self.process_response(request, self.get_response(request))
        response = self.get_response(request)
        response = self.set_headers(response)
        return response

    def _process_request(self, request):
        if 'HTTP_ACCESS_CONTROL_REQUEST_METHOD' in request.META:
            return self._set_headers(HttpResponse())

    def _process_response(self, request, response):
        return self._set_headers(response)
