<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string("size")->nullable();
            $table->string("area")->nullable();
            $table->date("date")->nullable();
            $table->unsignedInteger('agent_id')->unsigned();
            $table->unsignedInteger('user_id')->unsigned();
            $table->string("client_name")->nullable();
            $table->string("client_contact")->nullable();
            $table->string("client_email")->nullable();
            $table->string("city")->nullable();
            $table->enum("type",['facebook_lead','facebook_message','facebook_comment','walk_in','sms','reference'])->default('facebook_lead');
            $table->enum("status",[1,0])->default(1);
            $table->string("comments")->nullable();
            $table->date("remainder")->nullable();
            $table->enum("is_read",[0,1])->defualt(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('leads');
    }
}
