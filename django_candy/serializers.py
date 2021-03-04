from rest_framework import serializers
from .admin import site


def get_list_data(self):
    for field in self.get_list_display():
        pass



class CommonModelListSerializer(serializers.ModelSerializer):
    __str__ = serializers.SerializerMethodField()

    def get___str__(self, obj):
        return str(obj)
        
    class Meta:
        model = None
        fields = '__all__'

class CommonModelSerializer(serializers.ModelSerializer):
    __str__ = serializers.SerializerMethodField()

    def get___str__(self, obj):
        return str(obj)

    class Meta:
        model = None
        fields = '__all__'


